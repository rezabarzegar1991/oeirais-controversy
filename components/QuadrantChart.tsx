import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { QuadrantDataPoint } from '../types';

interface QuadrantChartProps {
    data: QuadrantDataPoint[];
}

export const QuadrantChart: React.FC<QuadrantChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 400;
        const margin = { top: 40, right: 40, bottom: 60, left: 60 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
        const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

        // Axes
        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScale));
        xAxis.selectAll("text").attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");
        
        const yAxis = chart.append("g").call(d3.axisLeft(yScale));
        yAxis.selectAll("text").attr("fill", "#9ca3af");
        yAxis.selectAll("path, line").attr("stroke", "#4b5563");
        
        // Axis Labels
        chart.append("text").attr("text-anchor", "middle").attr("x", width/2).attr("y", height + margin.bottom - 10)
            .text("Conflict Intensity").style("fill", "#F7F7FF");
        chart.append("text").attr("text-anchor", "middle").attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 20).attr("x", -height/2)
            .text("Land Ontology (Ecosystem ->)").style("fill", "#F7F7FF");

        // Quadrant lines
        chart.append("line").attr("x1", xScale(50)).attr("x2", xScale(50)).attr("y1", 0).attr("y2", height).attr("stroke", "#4b5563").attr("stroke-dasharray", "4");
        chart.append("line").attr("y1", yScale(50)).attr("y2", yScale(50)).attr("x1", 0).attr("x2", width).attr("stroke", "#4b5563").attr("stroke-dasharray", "4");

        const nodes = chart.selectAll("g.node")
            .data(data)
            .join("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${xScale(d[0])}, ${yScale(d[1])})`);

        // Bubbles
        nodes.append("circle")
            .attr("r", d => d[2] / 5) // Scale bubble size
            .style("fill", d => {
                if (d[0] > 75) return '#E54F6D'; // High conflict
                if (d[1] > 75) return '#48ACF0'; // High ecosystem
                return '#6C4675'; // Mid
            })
            .style("opacity", 0.7)
            .attr("stroke", "#F7F7FF")
            .attr("stroke-width", 1)
            .append("title")
            .text(d => `${d[3]}\nConflict: ${d[0]}\nOntology: ${d[1]}\nEco Score: ${d[2]}`);

        // Labels for bubbles
        nodes.append("text")
            .text(d => d[3])
            .attr("dy", d => - (d[2] / 5) - 5) // Position above the bubble
            .attr("text-anchor", "middle")
            .style("font-size", "10px")
            .style("fill", "#d1d5db")
            .style("pointer-events", "none");


    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '400px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};