// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
function buildTable(data) {
    data.forEach((dataRow) => {
      
      var row = tbody.append("tr");

      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        }
      );
    });
  }
  function handleClick() {
     
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    if (date) {

      filteredData = filteredData.filter(row => row.datetime === date);
    }
  }
  
  d3.selectAll("#filter-btn").on("click", handleClick);

  buildTable(tableData);