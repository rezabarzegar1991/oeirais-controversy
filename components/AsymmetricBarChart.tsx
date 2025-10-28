import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import type { AsymmetricDataPoint, TooltipState } from '../types';

interface AsymmetricBarChartProps {
    data: AsymmetricDataPoint[];
}

export const AsymmetricBarChart: React.FC<AsymmetricBarChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, content: '', x: 0, y: 0 });

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 200;
        const margin = { top: 20, right: 20, bottom: 40, left: 180 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
            
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value) || 0])
            .range([0, width]);
            
        const yScale = d3.scaleBand<string>()
            .domain(data.map(d => d.label))
            .range([0, height])
            .padding(0.2);

        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale).ticks(5).tickFormat(d3.format("~s")));
        
        xAxis.selectAll("text").attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");

        xAxis.append("text")
            .attr("y", 35)
            .attr("x", width / 2)
            .attr("fill", "#9ca3af")
            .text("Mobilization Count");
            
        const yAxis = chart.append("g").call(d3.axisLeft(yScale));

        yAxis.selectAll("text").attr("fill", "#9ca3af");
        yAxis.selectAll("path, line").attr("stroke", "#4b5563");
            
        chart.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("y", d => yScale(d.label)!)
            .attr("height", yScale.bandwidth())
            .attr("x", 0)
            .attr("width", d => xScale(d.value))
            .attr("fill", d => d.color)
            .style("cursor", "pointer")
            .on("mouseover", function(event, d) {
                d3.select(this).style("filter", "brightness(1.2)");
                setTooltip({
                    visible: true,
                    content: `<strong>${d.label}</strong><br/>Value: ${d3.format(",")(d.value)}`,
                    x: event.pageX,
                    y: event.pageY
                });
            })
            .on("mousemove", (event) => {
                setTooltip(prev => ({ ...prev, x: event.pageX, y: event.pageY }));
            })
            .on("mouseout", function() {
                d3.select(this).style("filter", "brightness(1)");
                setTooltip({ visible: false, content: '', x: 0, y: 0 });
            });

        chart.selectAll(".bar-label")
            .data(data)
            .enter().append("text")
            .attr("class", "bar-label")
            .attr("x", d => xScale(d.value) - 10)
            .attr("y", d => yScale(d.label)! + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "end")
            .style("fill", "white")
            .style("font-size", "14px")
            .style("font-weight", "600")
            .text(d => d3.format(",")(d.value))
            .style("pointer-events", "none");

    }, [data]);

    return (
        <div ref={containerRef} className="relative" style={{ width: '100%', height: '200px' }}>
            <svg ref={svgRef}></svg>
            {tooltip.visible && (
                <div
                    style={{
                        position: 'fixed',
                        left: `${tooltip.x + 15}px`,
                        top: `${tooltip.y + 15}px`,
                    }}
                    className="p-2 bg-gray-900 text-white rounded-md shadow-lg border border-gray-700 pointer-events-none text-xs"
                    dangerouslySetInnerHTML={{ __html: tooltip.content }}
                />
            )}
        </div>
    );
};