import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { EconomicParadoxData } from '../types';

interface EconomicParadoxChartProps {
    data: EconomicParadoxData;
}

const colors = {
    price: '#E54F6D',
    waitlist: '#48ACF0'
};

export const EconomicParadoxChart: React.FC<EconomicParadoxChartProps> = ({ data }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current || !data) return;

        const container = d3.select(containerRef.current);
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const containerWidth = (container.node() as HTMLElement).getBoundingClientRect().width;
        const chartHeight = 300;
        const margin = { top: 40, right: 60, bottom: 40, left: 60 };
        const width = containerWidth - margin.left - margin.right;
        const height = chartHeight - margin.top - margin.bottom;

        const chart = svg.attr("width", containerWidth)
            .attr("height", chartHeight)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        const xScale = d3.scalePoint<string>()
            .domain(data.years)
            .range([0, width])
            .padding(0.5);

        const y1Scale = d3.scaleLinear()
            .domain([0, d3.max(data.prices) || 0])
            .range([height, 0]);
            
        const y2Scale = d3.scaleLinear()
            .domain([0, d3.max(data.waitlist) || 0])
            .range([height, 0]);

        // X-axis
        const xAxis = chart.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));
        xAxis.selectAll("text").attr("fill", "#9ca3af");
        xAxis.selectAll("path, line").attr("stroke", "#4b5563");

        // Y1-axis (Price)
        const y1Axis = chart.append("g").call(d3.axisLeft(y1Scale).tickFormat(d => `€${d3.format("~s")(d)}`));
        y1Axis.selectAll("text").attr("fill", colors.price);
        y1Axis.selectAll("path, line").attr("stroke", colors.price);
        y1Axis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -margin.left + 20)
            .attr("x", -height / 2)
            .attr("fill", colors.price)
            .style("text-anchor", "middle")
            .text("Median Price (€/m²)");
            
        // Y2-axis (Waitlist)
        const y2Axis = chart.append("g").attr("transform", `translate(${width}, 0)`).call(d3.axisRight(y2Scale));
        y2Axis.selectAll("text").attr("fill", colors.waitlist);
        y2Axis.selectAll("path, line").attr("stroke", colors.waitlist);
        y2Axis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", margin.right - 20)
            .attr("x", -height / 2)
            .attr("fill", colors.waitlist)
            .style("text-anchor", "middle")
            .text("Waitlist (Families)");

        // Price Line
        const priceLine = d3.line<number>()
            .x((d, i) => xScale(data.years[i])!)
            .y(d => y1Scale(d))
            .curve(d3.curveMonotoneX);

        chart.append("path")
            .datum(data.prices)
            .attr("fill", "none")
            .attr("stroke", colors.price)
            .attr("stroke-width", 3)
            .attr("d", priceLine);

        // Waitlist Line
        const waitlistLine = d3.line<number>()
            .x((d, i) => xScale(data.years[i])!)
            .y(d => y2Scale(d))
            .curve(d3.curveMonotoneX);

        chart.append("path")
            .datum(data.waitlist)
            .attr("fill", "none")
            .attr("stroke", colors.waitlist)
            .attr("stroke-width", 3)
            .attr("d", waitlistLine);

    }, [data]);

    return (
        <div>
            <div ref={containerRef} style={{ width: '100%', height: '300px' }}>
                <svg ref={svgRef}></svg>
            </div>
            <div className="flex justify-center space-x-4 mt-2 text-xs text-gray-300">
                <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors.price }}></span>
                    Median Housing Price (€/m²)
                </div>
                <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors.waitlist }}></span>
                    Social Housing Waitlist (Families)
                </div>
            </div>
        </div>
    );
};