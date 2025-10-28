import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import type { ForceGraph, ForceGraphDefinitions, ForceGraphNode } from '../types';

interface ForceDirectedGraphProps {
    graph: ForceGraph;
    definitions: ForceGraphDefinitions;
}

export const ForceDirectedGraph: React.FC<ForceDirectedGraphProps> = ({ graph, definitions }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [selectedNode, setSelectedNode] = useState<ForceGraphNode | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !graph) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const height = 500;
        const width = containerWidth;
        const boundaryMargin = width * 0.05;

        svg.attr("width", width).attr("height", height).attr("viewBox", [0, 0, width, height]);

        const simulation = d3.forceSimulation(graph.nodes as d3.SimulationNodeDatum[])
            .force("link", d3.forceLink(graph.links).id((d: any) => d.id).distance(width * 0.1).strength(0.8))
            .force("charge", d3.forceManyBody().strength(-width * 0.4))
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
            .attr("stroke", "#9ca3af")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(graph.links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.weight));

        const node = svg.append("g")
            .selectAll("g")
            .data(graph.nodes)
            .join("g")
            .call(drag(simulation) as any)
            .on("click", (event, d) => {
                setSelectedNode(d);
            });
        
        node.append("circle")
            .attr("r", d => d.size * 2)
            .attr("fill", d => d.color)
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5);
            
        node.append("text")
            .attr("x", 8)
            .attr("y", "0.31em")
            .text(d => d.label)
            .attr("fill", "#e5e7eb")
            .attr("font-size", "10px")
            .attr("stroke", "#1a202c")
            .attr("stroke-width", 0.3);

        simulation.on("tick", () => {
            link
                .attr("x1", d => (d.source as any).x)
                .attr("y1", d => (d.source as any).y)
                .attr("x2", d => (d.target as any).x)
                .attr("y2", d => (d.target as any).y);
            node.attr("transform", d => {
                 d.x = Math.max(boundaryMargin, Math.min(width - boundaryMargin, d.x!));
                 d.y = Math.max(boundaryMargin, Math.min(height - boundaryMargin, d.y!));
                return `translate(${d.x},${d.y})`
            });
        });

        function drag(simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) {
            // FIX: Specify the generic types for d3.drag to match the selection it's called on.
            // The selection is of <g> elements (SVGGElement) with ForceGraphNode data.
            return d3.drag<SVGGElement, ForceGraphNode>()
                .on("start", (event, d:any) => {
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d:any) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d:any) => {
                    if (!event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                });
        }
        
        setSelectedNode(graph.nodes.find(n => n.id === 'N9') || null);

    }, [graph]);

    const InfoPanel = () => {
        if (!selectedNode) return null;
        const def = definitions[selectedNode.id];
        if (!def) return null;
        
        const tagClass = def.network === 'Proponent' ? 'bg-blue-600' :
                         def.network === 'Opponent' ? 'bg-green-600' :
                         def.network === 'Contested' ? 'bg-yellow-500' : 'bg-red-600';
        
        return (
            <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-80 p-4 rounded-lg border border-gray-700 max-w-xs text-sm">
                <h4 className="font-bold text-white mb-2">{def.title}</h4>
                <div className="flex space-x-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs text-white ${tagClass}`}>{def.network}</span>
                    <span className="px-2 py-0.5 rounded text-xs bg-gray-600 text-white">Type: {def.type}</span>
                </div>
                <p className="text-gray-300">{def.description}</p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative w-full h-[500px] bg-gray-900 rounded-md">
            <svg ref={svgRef}></svg>
            <InfoPanel />
        </div>
    );
};
