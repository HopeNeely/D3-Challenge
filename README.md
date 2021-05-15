# D3-Challenge

This analysis of trends in factors shaping health outcomes is displayed with a D3.js scatter plot with interactive elements. The data set included is based on 2014 ACS 1-year estimates from the [US Census Bureau](https://data.census.gov/cedsci/). The data set includes data on rates of income, obesity, poverty, etc. by state. 

## Data

[https://data.census.gov/cedsci/](https://data.census.gov/cedsci/)


## Instructions to run code
1. Download or clone repository.
2. Open app.js in VScode.
3. Open integrated terminal and run "python -m http.server" there.
4. View the index.html at "localhost:8000" in your web browser. 


- - -
## Analysis
Currently, this file runs a static scatter plot showing the relationship between poverty and smoking rates. Soon, I will update the scatter plot to show multiple view for the user to interact with. 

---

### Bonus:(Optional)

Why make a static graphic when D3 lets you interact with your data?

![7-animated-scatter](D3_data_journalism/assets/Images/7-animated-scatter.gif)

#### 1. More Data, More Dynamics

You're going to include more demographics and more risk factors. Place additional labels in your scatter plot and give them click events so that your users can decide which data to display. Animate the transitions for your circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

* Hint: Try binding all of the CSV data to your circles. This will let you easily determine their x or y values when you click the labels.

#### 2. Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to your circles and display each tooltip with the data that the user has selected. Use the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged)—we've already included this plugin in your assignment directory.

![8-tooltip](D3_data_journalism/assets/Images/8-tooltip.gif)

* Check out [David Gotz's example](https://bl.ocks.org/davegotz/bd54b56723c154d25eedde6504d30ad7) to see how you should implement tooltips with d3-tip.

- - -


* Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file
