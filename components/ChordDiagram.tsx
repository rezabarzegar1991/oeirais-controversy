import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import type { Relation, VariableDictionary, Category } from '../types';

interface ChordDiagramProps {
    data: Relation[];
    variableDictionary: VariableDictionary;
    nodeCategories: Record<string, Category>;
    onNodeSelect: (variableName: string | null) => void;
}

const categoryColors: Record<Category, string> = {
    engine: '#E54F6D',
    guardian: '#48ACF0',
    justras: '#6C4675',
};

export const ChordDiagram: React.FC<ChordDiagramProps> = ({ data, nodeCategories, onNodeSelect }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [selectedNodeIndex, setSelectedNodeIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const width = containerWidth;
        const height = Math.max(width, 500);
        const outerRadius = Math.min(width, height) * 0.5 - 130;
        const innerRadius = outerRadius - 10;
        
        if (innerRadius < 10) return; // Prevent rendering if too small

        const chart = svg.attr("viewBox", [-width / 2, -height / 2, width, height])
            .on("click", () => setSelectedNodeIndex(null)); // Deselect on background click

        if (data.length === 0) {
            chart.append("text")
                .attr("text-anchor", "middle").style("fill", "#9ca3af")
                .text("No data for selected filters.");
            return;
        }

        const names = Array.from(new Set(data.flatMap(d => [d[0], d[1]]))).sort();
        const index = new Map(names.map((name, i) => [name, i]));
        const matrix = Array.from(index, () => new Array(names.length).fill(0));
        
        for (const [source, target] of data) {
            const sourceIndex = index.get(source);
            const targetIndex = index.get(target);
            if (sourceIndex !== undefined && targetIndex !== undefined) {
                matrix[sourceIndex][targetIndex] += 1;
            }
        }

        const chord = d3.chord().padAngle(0.05).sortSubgroups(d3.descending);
        const chords = chord(matrix);

        const arc = d3.arc<d3.ChordGroup>().innerRadius(innerRadius).outerRadius(outerRadius);
        const ribbon = d3.ribbon<any, d3.Chord>().radius(innerRadius);

        const group = chart.append("g").selectAll("g").data(chords.groups).join("g");
        const ribbons = chart.append("g").attr("fill-opacity", 0.75).selectAll("path").data(chords).join("path");

        const updateHighlight = (activeIndex: number | null) => {
            onNodeSelect(activeIndex === null ? null : names[activeIndex]);
            const isNodeSelected = activeIndex !== null;
            // FIX: The original code created a type union (number | function) that D3's .style method overloads couldn't resolve.
            // This is fixed by always passing a function, which satisfies the ValueFn overload.
            group.style("opacity", (d) => isNodeSelected ? (d.index === activeIndex ? 1 : 0.2) : 1);
            ribbons.style("opacity", (d) => isNodeSelected ? (d.source.index === activeIndex || d.target.index === activeIndex ? 1 : 0.1) : 0.75);
        };
        
        updateHighlight(selectedNodeIndex);

        group.append("path")
            .attr("fill", d => categoryColors[nodeCategories[names[d.index]]])
            .attr("d", arc)
            .style("cursor", "pointer")
            .on("mouseover", (event, d) => selectedNodeIndex === null && updateHighlight(d.index))
            .on("mouseout", () => selectedNodeIndex === null && updateHighlight(null))
            .on("click", (event, d) => {
                event.stopPropagation();
                setSelectedNodeIndex(prev => (prev === d.index ? null : d.index));
            });

        group.append("text")
            .each(d => { (d as any).angle = (d.startAngle + d.endAngle) / 2; })
            .attr("dy", "0.35em")
            .attr("transform", d => `rotate(${((d as any).angle * 180 / Math.PI - 90)}) translate(${outerRadius + 5}) ${(d as any).angle > Math.PI ? "rotate(180)" : ""}`)
            .attr("text-anchor", d => (d as any).angle > Math.PI ? "end" : null)
            .text(d => names[d.index])
            .style("fill", "#e5e7eb").style("font-size", "9px").style("cursor", "pointer")
            .on("mouseover", (event, d) => selectedNodeIndex === null && updateHighlight(d.index))
            .on("mouseout", () => selectedNodeIndex === null && updateHighlight(null))
            .on("click", (event, d) => {
                event.stopPropagation();
                setSelectedNodeIndex(prev => (prev === d.index ? null : d.index));
            });
            
        ribbons.attr("d", ribbon)
            .attr("fill", d => categoryColors[nodeCategories[names[d.source.index]]])
            .style("mix-blend-mode", "lighten");

    }, [data, nodeCategories, onNodeSelect, selectedNodeIndex]);

    return (
        <div ref={containerRef} className="w-full flex justify-center">
             <svg ref={svgRef} style={{ width: '100%', maxWidth: '900px', height: 'auto' }}></svg>
        </div>
    );
};
