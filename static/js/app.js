// from data.js
var tbody = d3.select('tbody')
// YOUR CODE HERE!
var buttons = d3.select('#filter-btn')

buttons.on("click", function() {
    d3.event.preventDefault();
    console.log("YAYAYAYAYAYYAYA");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var newData = data.filter(line => line.datetime === inputValue);
    newData.forEach(function (line) {
    var row = tbody.append("tr")
    Object.entries(line).forEach(function ([key, value]) {
        var cell = tbody.append("td");
        cell.text(value)
    });
});
});
