import * as d3 from 'd3';
import { useRef, useState, useEffect } from 'react';

const MultiBarChart = ({
  id,
  data,
  colors = ['#5370DA', '#FF6F50', '#FFC3C3', '#2FECD5'],
  line = [],
}: {
  id: string;
  data: any;
  colors: string[];
  line: string[];
}) => {
  console.log(data);
  const multibarRef = useRef<HTMLDivElement>(null);
  const height = 300;
  const [width, setWidth] = useState(0);
  const margin = { top: 20, right: 0, bottom: 20, left: 30 };

  useEffect(() => {
    if (multibarRef.current) {
      const element = multibarRef.current as HTMLElement;
      setWidth(element.offsetWidth - margin.left - margin.right);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWidth(multibarRef.current?.offsetWidth || 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Check if data is defined
    if (!data) {
      console.error('Data is undefined');
      return;
    }

    // Parse the data
    const parsedData = Object.keys(data).map((key) => {
      return {
        key,
        values: data[key].values.map((d: { x: any; y: number }) => ({
          date: d.x,
          count: d.y,
        })),
      };
    });

    // Flatten the data for easier processing
    const allValues = parsedData.flatMap((d) => d.values);

    // Get unique dates
    const uniqueDates = [...new Set(allValues.map((d) => d.date))];
    
    // Set up the x scale
    const x0 = d3
      .scaleBand()
      .domain(uniqueDates)
      .range([0, width])
      .padding(0.1);

    // Set up the x1 scale for grouping bars within each date
    const x1 = d3
      .scaleBand()
      .domain(parsedData.filter((d) => !line.includes(d.key)).map((d) => d.key))
      .range([0, x0.bandwidth()]) // Map group bands to the width of each date's x0 band
      .padding(0.05);

    // Set up the y scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(allValues, (d) => d.count)])
      .nice()
      .range([height, 0]);

    d3.select(`#bar-chart-${id}`).selectAll('*').remove();

    // Set up the SVG container
    const svg = d3
      .select(`#bar-chart-${id}`)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Append a group element for the x-axis
    const xAxisGroup = svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`);

    // Create the x-axis with conditional formatting
    const xAxis = d3.axisBottom(x0).tickFormat((d: any) => {
      return d;
    });

    // Call the x-axis
    xAxisGroup
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .style('font-size', '10px') // Increased font size
      .style('text-anchor', 'middle');

    // Append a group element for the y-axis
    const yAxisGroup = svg.append('g').attr('class', 'y-axis');

    // Create the y-axis
    const yAxis = d3
      .axisLeft(y)
      .tickValues(d3.range(0, y.domain()[1] + 10, 10));

    // Call the y-axis
    yAxisGroup.call(yAxis);

    // Remove axis lines
    xAxisGroup.selectAll('path').style('stroke', 'none');
    xAxisGroup.selectAll('line').style('stroke', 'none');
    yAxisGroup.selectAll('path').style('stroke', 'none');
    yAxisGroup.selectAll('line').style('stroke', 'none');

    // Add horizontal grid lines
    svg
      .append('g')
      .attr('class', 'grid-vertical')
      .call(
        d3
          .axisLeft(y)
          .tickValues(d3.range(0, y.domain()[1] + 10, 10))
          .tickSize(-width) // Makes the lines span the full width
          .tickFormat(null) // Removes the tick labels
      )
      .style('stroke-dasharray', '3 3')
      .style('stroke-opacity', 0.5)
      .select('.domain') // Add this line
      .remove();

    // Remove the domain line from the vertical grid
    svg.selectAll('.grid-vertical').selectAll('.tick text').remove();
    // Style X axis lines
    svg.selectAll('.domain, .tick line').attr('stroke', '#D9E0E6');

    // Create main groups in correct z-index order
    const mainGroup = svg.append('g').attr('class', 'main-group');
    const overlayGroup = mainGroup
      .append('g')
      .attr('class', 'overlay-group')
      .attr('pointer-events', 'none');
      
    const barsContainer = mainGroup.append('g').attr('class', 'bars-group');
    const lineGroup = mainGroup.append('g').attr('class', 'line-group');
    const hoverGroup = mainGroup.append('g').attr('class', 'hover-group');
    // Create tooltip
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip-multibar')
      .style('position', 'absolute')
      .style('background', '#ffffff')
      .style('border', '1px solid #ccc')
      .style('padding', '10px')
      .style('display', 'none')
      .style('opacity', 0)
      .style('pointer-events', 'none')  // Added to prevent tooltip interference
      .style('z-index', '1000');  // 
    // Create hover rectangles
    const hoverRects = hoverGroup
      .selectAll('rect')  // Changed from '.hover-group' to 'rect'
      .data(uniqueDates)
      .join('rect')       // Changed from enter().append() to join()
      .attr('x', (d) => x0(d) || 0)
      .attr('y', 0)
      .attr('width', x0.bandwidth())
      .attr('height', height)
      .attr('fill', 'transparent')
      .style('cursor', 'pointer'); 
      hoverRects.on('mouseover', function (event, d) {  // Changed from 'mouseenter mouseover mousemove'
        const xPos = parseFloat(d3.select(this).attr('x'));
        const barWidth = parseFloat(d3.select(this).attr('width'));
        const overlayWidth = barWidth + 10;

        overlayGroup
          .append('rect')
          .attr('class', 'hover-overlay')
          .attr('fill', '#D3E0F4')
          .attr('opacity', 0.3)
          .attr('x', xPos - 5)
          .attr('y', -2)
          .attr('width', overlayWidth)
          .attr('height', height + 4);

        tooltip
          .style('display', 'block')  // Added to show tooltip
          .style('opacity', 1)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`);

        const tooltipContent = parsedData
          .map((series) => {
            const value = series.values.find((v: any) => v.date === d);
            return `${series.key}: ${value ? value.count : 0}`;
          })
          .join('<br>');

        tooltip.html(`<strong>${d}</strong><br>${tooltipContent}`);
      })
      .on('mousemove', function(event) {  // Added mousemove handler
        tooltip
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 10}px`);
      })
      .on('mouseout', function () {
        overlayGroup.selectAll('.hover-overlay').remove();
        tooltip
          .style('opacity', 0)
          .style('display', 'none');  // Added to hide tooltip
      });

      // Create line generator
    const lineGenerator = d3.line()
    .x((d: any) => x0(d.date)! + x0.bandwidth() / 2)
    .y((d: any) => y(d.count))
    .curve(d3.curveCatmullRom.alpha(0.5));

  // Draw lines for keys in the line array
  parsedData.forEach((series, index) => {
    if (line.includes(series.key)) {
      lineGroup.append('path')
        .datum(series.values)
        .attr('fill', 'none')
        .attr('stroke', colors[index])
        .attr('stroke-dasharray', index % 2 !== 0 ? '3 3' : 'none')
        .attr('stroke-width', 2)
        .attr('d', lineGenerator as any);

      // Add dots for each data point
      lineGroup.selectAll(`.dot-${series.key}`)
        .data(series.values)
        .enter()
        .append('circle')
        .attr('class', `dot-${series.key}`)
        .attr('cx', (d: any) => x0(d.date)! + x0.bandwidth() / 2)
        .attr('cy', (d: any) => y(d.count))
        .attr('r', 4)
        .attr('fill', colors[index]);
      }
    });
    console.log(uniqueDates);
    // Render bars
    // svg.selectAll('.bar-group').remove();
    const barGroups = barsContainer
      .selectAll('.bar-group')
      .data(uniqueDates)
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .attr('transform', (d) => `translate(${x0(d)},0)`);

    barGroups
      .selectAll('.bar')
      .data((date) =>
        parsedData
      .filter(d => !line.includes(d.key)).map((d, index) => ({
          key: d.key,
          colorIndex: index,
          value: d.values.find((v: any) => {
            const isValidDate = v?.date instanceof Date && !isNaN(v.date);
            return isValidDate
              ? v?.date?.getTime() === date?.getTime()
              : v?.date === date;
          }),
        }))
      )
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x1(d.key) || 0) // Ensure we return a number even if x1(d.key) is undefined
      .attr('y', (d) => y(d.value ? d.value.count : 0))
      .attr('width', x1.bandwidth() - 2)
      .attr('height', (d) => height - y(d.value ? d.value.count : 0))
      .attr('fill', (d) => {
        // Add a guard clause to ensure proper color mapping
        if (d.colorIndex === undefined || d.colorIndex >= colors.length) {
          console.warn('Invalid color index:', d);
          return 'red'; // fallback color
        }
        return colors[d.colorIndex];
      })
      .attr('rx', 5)
      .attr('ry', 5);
  }, [data, height, width, margin, colors]);

  return <div ref={multibarRef} id={`bar-chart-${id}`}></div>;
};

export default MultiBarChart;
