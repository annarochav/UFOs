//The first thing we're going to do is import the data.
// import the data from data.js
const tableData = data;

//Next, we need to point our data to our HTML page. 
//we need to tell JavaScript what type of element the data will be displayed in.
//We already know that the data will be displayed in a table.
//so in our code editor we'll reference the tbody HTML tag using D3.
// Reference the HTML table using d3
var tbody = d3.select("tbody");

//The next step is to build the table to sort and store the data.
//need to iterate through the array of objects in our data file and then append them to a table row

function buildTable(data) {
  tbody.html("");
  

  data.forEach((dataRow) => {
    let row = tbody.append("tr");

//we'll add code to loop through each field in the dataRow argument. 
//reference one object from the array of UFO sightings. 
    Object.values(dataRow).forEach((val) => {

//we'll append each value of the object to a cell in the table.
      let cell = row.append("td");

//next line we'll add the values.
//When we chain .text(value) to the variable, we are extracting only the text of the value.
      cell.text(val);
      }
    );
  });
}
//With this function, we have done the following:
//Looped through each object in the array
//Appended a row to the HTML table
//Added each value from the object into a cell
