import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { GapAnalysisDataPoint } from '../types';

interface GapAnalysisChartProps {
    data: GapAnalysisDataPoint[];
}

export const GapAnalysisChart: React.FC<GapAnalysisChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const margin = { top: 20, right: 20, bottom: 120, left: 40 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        const subgroups = ['reality', 'gap'];
        const groups = data.map(d => d.label);
        
        const xScale = d3.scaleBand<string>()
            .domain(groups)
            .range([0, width])
            .padding(0.2);

        const yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height, 0]);

        const color = d3.scaleOrdinal<string>()
            .domain(subgroups)
            .range(['#E54F6D', '#6C4675']);
        
        const stackedData = d3.stack().keys(subgroups)(data as any);

        chart.append("g")
            .selectAll("g")
            .data(stackedData)
            .join("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .join("rect")
                .attr("x", d => xScale((d.data as any).label)!)
                .attr("y", d => yScale(d[1]))
                .attr("height", d => yScale(d[0]) - yScale(d[1]))
                .attr("width", xScale.bandwidth());

        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        xAxis.selectAll("text")
            .attr("transform", "translate(-10,10)rotate(-45)")
            .style("text-anchor", "end")
            .attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");

        const yAxis = chart.append("g")
            .call(d3.axisLeft(yScale));
        yAxis.selectAll("text").attr("fill", "#9ca3af");
        yAxis.selectAll("path, line").attr("stroke", "#4b5563");
        yAxis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 10)
            .attr("x", -height / 2)
            .attr("fill", "#9ca3af")
            .style("text-anchor", "middle")
            .text("Score");
            
    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};