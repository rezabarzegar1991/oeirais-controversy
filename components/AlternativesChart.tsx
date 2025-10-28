import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { AlternativesDataPoint } from '../types';

interface AlternativesChartProps {
    data: AlternativesDataPoint[];
}

export const AlternativesChart: React.FC<AlternativesChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 150;
        const margin = { top: 30, right: 20, bottom: 40, left: 20 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg
            .attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
            
        const series = d3.stack()
            .keys(data.map(d => d.label))
            //@ts-ignore
            .value((d, key) => d[key])
            //@ts-ignore
            ([data.reduce((acc, cur) => ({...acc, [cur.label]: cur.value}), {})]);

        const xScale = d3.scaleLinear()
            .domain([0, d3.sum(data, d => d.value)])
            .range([0, width]);

        const yScale = d3.scaleBand()
            .domain(['Units'])
            .range([0, height])
            .padding(0.5);

        const color = d3.scaleOrdinal<string>()
            .domain(data.map(d => d.label))
            .range(data.map(d => d.color));

        chart.selectAll("g")
            .data(series)
            .enter().append("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .enter().append("rect")
            .attr("y", d => yScale('Units')!)
            .attr("x", d => xScale(d[0]))
            .attr("width", d => xScale(d[1]) - xScale(d[0]))
            .attr("height", yScale.bandwidth());

        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format("~s")));
        
        xAxis.selectAll("text").attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");
        
        xAxis.append("text")
            .attr("y", 35)
            .attr("x", width / 2)
            .attr("fill", "#9ca3af")
            .text("Number of Units/Families");

        // Legend
        const legend = chart.append("g")
            .attr("transform", `translate(0, -25)`);
        
        const legendItems = legend.selectAll(".legend-item")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "legend-item")
            .attr("transform", (d, i) => `translate(${i * 150}, 0)`);

        legendItems.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", d => d.color);

        legendItems.append("text")
            .attr("x", 20)
            .attr("y", 12)
            .text(d => `${d.label} (${d3.format(",")(d.value)})`)
            .attr("fill", "#e5e7eb")
            .style("font-size", "12px");

    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '150px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};
