import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { NarrativeDataPoint } from '../types';

interface NarrativeChartProps {
    data: NarrativeDataPoint[];
}

export const NarrativeChart: React.FC<NarrativeChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const margin = { top: 20, right: 20, bottom: 100, left: 60 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const keys = ['proponent', 'opponent', 'rhetoric'];
        const colors: Record<string, string> = {
            proponent: '#E54F6D',
            opponent: '#48ACF0',
            rhetoric: '#6C4675'
        };
        
        const stack = d3.stack<NarrativeDataPoint>().keys(keys);
        const stackedData = stack(data);

        const xScale = d3.scalePoint<string>()
            .domain(data.map(d => d.event))
            .range([0, width])
            .padding(0.5);

        const yScale = d3.scaleLinear()
            .domain([0, 1.0])
            .range([height, 0]);

        const area = d3.area<d3.SeriesPoint<NarrativeDataPoint>>()
            .x(d => xScale(d.data.event)!)
            .y0(d => yScale(d[0]))
            .y1(d => yScale(d[1]))
            .curve(d3.curveMonotoneX);

        chart.selectAll("path.area")
            .data(stackedData)
            .enter().append("path")
            .attr("class", "area")
            .style("fill", d => colors[d.key])
            .attr("d", area);

        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));
        
        xAxis.selectAll("text")
            .attr("transform", "translate(-10,10)rotate(-45)")
            .style("text-anchor", "end")
            .attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");
        
        const yAxis = chart.append("g")
            .call(d3.axisLeft(yScale).tickFormat(d3.format(".0%")));

        yAxis.selectAll("text").attr("fill", "#9ca3af");
        yAxis.selectAll("path, line").attr("stroke", "#4b5563");

        yAxis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "-3.5em")
            .attr("fill", "#9ca3af")
            .style("text-anchor", "end")
            .text("Narrative Saturation (%)");
            
    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};