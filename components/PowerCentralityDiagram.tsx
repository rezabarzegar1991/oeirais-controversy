import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { PowerCentralityMatrix, PowerCentralityActor } from '../types';

interface PowerCentralityDiagramProps {
    matrix: PowerCentralityMatrix;
    actors: PowerCentralityActor[];
}

export const PowerCentralityDiagram: React.FC<PowerCentralityDiagramProps> = ({ matrix, actors }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !matrix) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const chartWidth = containerWidth;
        const outerRadius = Math.min(chartWidth, chartHeight) * 0.5 - 40;
        const innerRadius = outerRadius - 10;
        
        const chart = svg.attr("width", chartWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${chartWidth / 2}, ${chartHeight / 2})`);

        const chord = d3.chord()
            .padAngle(0.05)
            .sortSubgroups(d3.descending)(matrix);
        
        const arc = d3.arc<any, d3.ChordGroup>()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        const ribbon = d3.ribbon<any, d3.Chord>()
            .radius(innerRadius);
            
        const colors = actors.map(a => a.color);

        // Arcs
        chart.append("g")
            .selectAll("path")
            .data(chord.groups)
            .join("path")
            .attr("d", arc)
            .attr("fill", d => colors[d.index])
            // FIX: .darker() returns a color object. .attr() expects a string. Convert it with .toString().
            .attr("stroke", d => d3.rgb(colors[d.index]).darker().toString());
            
        // Ribbons
        chart.append("g")
            .attr("fill-opacity", 0.75)
            .selectAll("path")
            .data(chord)
            .join("path")
            .attr("d", ribbon)
            .attr("fill", d => colors[d.target.index])
            // FIX: .darker() returns a color object. .attr() expects a string. Convert it with .toString().
            .attr("stroke", d => d3.rgb(colors[d.target.index]).darker().toString());

    }, [matrix, actors]);

    return (
        <div>
            <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
                <svg ref={svgRef}></svg>
            </div>
            <div className="text-xs text-gray-400 mt-2 space-y-1">
                <h4 className="font-semibold text-gray-300">Actor Legend:</h4>
                <ul className="list-none ml-0 space-y-1">
                    {actors.map(actor => (
                        <li key={actor.name} className="flex items-center">
                            <span className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: actor.color }}></span>
                            {actor.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
