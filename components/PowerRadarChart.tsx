import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { RadarData } from '../types';

interface PowerRadarChartProps {
    data: RadarData;
}

export const PowerRadarChart: React.FC<PowerRadarChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const margin = { top: 40, right: 40, bottom: 40, left: 40 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;
        const radius = Math.min(width, height) / 2;
        const levels = 5;
        
        const chart = svg.attr("width", containerWidth).attr("height", chartHeight)
            .append("g").attr("transform", `translate(${containerWidth/2}, ${chartHeight/2})`);

        const angleSlice = Math.PI * 2 / data.labels.length;
        const rScale = d3.scaleLinear().range([0, radius]).domain([0, 5]);

        const axisGrid = chart.append("g").attr("class", "axisWrapper");
        
        axisGrid.selectAll(".levels")
           .data(d3.range(1, levels + 1).reverse())
           .join("circle")
           .attr("r", d => radius / levels * d)
           .style("fill", "#2d3748")
           .style("stroke", "#4a5568")
           .style("fill-opacity", 0.1);

        const axis = axisGrid.selectAll(".axis")
            .data(data.labels)
            .join("g")
            .attr("class", "axis");

        axis.append("line")
            .attr("x1", 0).attr("y1", 0)
            .attr("x2", (d, i) => rScale(5) * Math.cos(angleSlice * i - Math.PI / 2))
            .attr("y2", (d, i) => rScale(5) * Math.sin(angleSlice * i - Math.PI / 2))
            .attr("class", "line").style("stroke", "#4a5568").style("stroke-width", "1px");

        axis.append("text")
            .attr("class", "legend")
            .style("font-size", "11px").attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("x", (d, i) => rScale(5.5) * Math.cos(angleSlice * i - Math.PI / 2))
            .attr("y", (d, i) => rScale(5.5) * Math.sin(angleSlice * i - Math.PI / 2))
            .text(d => d)
            .style("fill", "#9ca3af");

        const radarLine = d3.lineRadial<number>()
            .curve(d3.curveLinearClosed)
            .radius(d => rScale(d))
            .angle((d, i) => i * angleSlice);

        const blobWrapper = chart.selectAll(".radarWrapper")
            .data(data.datasets)
            .join("g")
            .attr("class", "radarWrapper");
        
        blobWrapper.append("path")
            .attr("class", "radarArea")
            .attr("d", d => radarLine(d.data))
            .style("fill", d => d.backgroundColor)
            .style("fill-opacity", 0.7);
            
        blobWrapper.append("path")
            .attr("class", "radarStroke")
            .attr("d", d => radarLine(d.data))
            .style("fill", "none")
            .style("stroke-width", "2px")
            .style("stroke", d => d.borderColor);

    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};
