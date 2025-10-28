import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { FunnelDataPoint } from '../types';

interface FunnelOfExclusionProps {
    data: FunnelDataPoint[];
}

export const FunnelOfExclusion: React.FC<FunnelOfExclusionProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 350;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const maxVal = data[0]?.value || 1;
        const sectionHeight = height / data.length;

        const g = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", (d, i) => `translate(0, ${i * sectionHeight})`);
        
        g.append("polygon")
            .attr("points", (d, i) => {
                const topWidth = (i === 0) ? width : (data[i-1].value / maxVal) * width;
                const bottomWidth = (d.value / maxVal) * width;
                const topY = 0;
                const bottomY = sectionHeight * 0.9;
                
                const topLeftX = (width - topWidth) / 2;
                const topRightX = (width + topWidth) / 2;
                const bottomLeftX = (width - bottomWidth) / 2;
                const bottomRightX = (width + bottomWidth) / 2;
                
                return `${topLeftX},${topY} ${topRightX},${topY} ${bottomRightX},${bottomY} ${bottomLeftX},${bottomY}`;
            })
            .attr("fill", d => d.color);

        g.append("text")
            .attr("x", width / 2)
            .attr("y", sectionHeight / 2 - 10)
            .attr("text-anchor", "middle")
            .style("font-size", "1.25rem")
            .style("font-weight", "600")
            .style("fill", "#fff")
            .text(d => d3.format(",")(d.value));

        g.append("text")
            .attr("x", width / 2)
            .attr("y", sectionHeight / 2 + 15)
            .attr("text-anchor", "middle")
            .style("font-size", "0.9rem")
            .style("fill", "#e5e7eb")
            .text(d => d.stage);

    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '350px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};
