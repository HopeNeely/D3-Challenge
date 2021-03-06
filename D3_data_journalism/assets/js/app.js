var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 60
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)

// Import Data
d3.csv("assets/data/data.csv").then(function (healthData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    healthData.forEach((data) => {
        data.poverty = +data.poverty
        data.smokes = +data.smokes
    })

    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([8, d3.max(healthData, d => d.poverty)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([6, d3.max(healthData, d => d.smokes)])
        .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale)
    var leftAxis = d3.axisLeft(yLinearScale)

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis)

    chartGroup.append("g")
        .call(leftAxis)

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
        .data(healthData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.smokes))
        .attr("r", "15")
        .attr("fill", "lightblue")
        .attr("opacity", ".9")


        // Here is were the state abbr go:
        chartGroup.append("text")
        // .style("text-anchor", "middle")
        .style("fill", "white")
        .selectAll('tspan')
        .data(healthData)
        .enter()
        .append('tspan')
        .attr("x", d => xLinearScale(d.poverty))
        .attr("y", d => yLinearScale(d.smokes))
        .attr("dx", d => {return -10})
        .attr("dy", d => {return 5})
        .text(d => {return d.abbr})

    // // Step 6: Initialize tool tip
    // // ==============================
    // var toolTip = d3.tip()
    //     .attr("class", "d3-tip") // style
        
        // .offset([80, -60]) // placement
        // .html((d) => {  // instruction/content
        //     return (`${d.abbr}`)
        // })

    // // Step 7: Create tooltip in the chart
    // // ==============================
    // chartGroup.call(toolTip);

    // // Step 8: Create event listeners to display and hide the tooltip
    // // ==============================
    // circlesGroup.on("mouseover", (data) => {
    //     toolTip.show(data, this)
    // })
    //     // onmouseout event
    //     .on("mouseout", (data, index) => {
    //         toolTip.hide(data)
    //     })

    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 10)
        .attr("x", 0 - (height / 2) - 30)
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Smoking Rates");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("Poverty Rates");
})

    .catch(function (error) {
        console.log(error);
    });

