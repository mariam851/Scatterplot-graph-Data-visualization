fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
    .then(response=> response.json())
    .then(data => {
  const xValues= data.map(item=>item.Year);
  const yValues= data.map(item=>item.Time);
  
  const colors = data.map(item=>item.Doping?"blue":"yellow");
  const trace = {
    x: xValues,
    y: yValues,
    mode:"markers",
    type:"scatter",
    marker: {color:colors, size:12},
    text: data.map(item =>`${item.Name}: ${item.Nationality}<br>
    Year: ${item.Year}, Time: ${item.Time}<br>
    
    ${item.Doping || "No Doping"}`)
  };
  const layout ={
    title: "Doping in Professional Bicycle Racing",
    xaxis: {title: "Year"},
    yaxis: {title: "Time in Minutes"},
    plot_bgcolor: "#f4f4f9",
    paper_bgcolor: "#f4f4f9",
     margin: { t: 40, r: 20, b: 50, l: 50 }
  };
  Plotly.newPlot("scatter-plot", [trace],layout);
  
  
})
.catch(error=> console.error("Error",error));