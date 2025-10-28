import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { EngineComponentDataPoint } from '../types';

interface EngineComponentsChartProps {
    data: EngineComponentDataPoint[];
}

export const EngineComponentsChart: React.FC<EngineComponentsChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;
        const radius = Math.min(width, height) / 2;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${containerWidth / 2}, ${chartHeight / 2})`);

        const angleScale = d3.scaleBand<string>()
            .domain(data.map(d => d.label))
            .range([0, 2 * Math.PI])
            .padding(0);

        const radiusScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) || 0])
            .range([0, radius]);

        const arcGenerator = d3.arc<EngineComponentDataPoint>()
            .innerRadius(0)
            .outerRadius(d => radiusScale(d.value))
            .startAngle(d => angleScale(d.label)!)
            .endAngle(d => angleScale(d.label)! + angleScale.bandwidth())
            .padAngle(0.01)
            .padRadius(radius);
            
        chart.selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("d", arcGenerator)
            .attr("fill", d => d.color);

        const label = chart.append("g")
            .selectAll("g")
            .data(data)
            .join("g")
            .attr("text-anchor", "middle")
            .attr("transform", d => `rotate(${((angleScale(d.label)! + angleScale.bandwidth() / 2) * 180 / Math.PI) - 90}) translate(${radius + 20},0)`);

        label.append("text")
            .attr("transform", d => (angleScale(d.label)! + angleScale.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90) translate(0,16)" : "rotate(-90) translate(0,-9)")
            .text(d => d.label)
            .style("font-size", "11px")
            .style("fill", "#e5e7eb");

    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};
