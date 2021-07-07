import React, { Component } from 'react';
//import CanvasJSReact from '../../../../lib/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Chart from "react-google-charts";

const data = [
  ["Element", "Density", { role: "style" }],
  ["January", 1, "#A7C957"], // RGB value
  ["February", 5, "#A7C957"], // English color name
  ["March", 3, "#A7C957"],
  ["April", 2, "#A7C957"],
  ["May", 0, "#A7C957"],
  ["June", 5, "#A7C957"],
   // CSS-style declaration
];
const options = {
    title: "Leave Statistics",
}

class Barchart extends Component {
    render() {
        return (
            <Chart
                chartType="ColumnChart"
                options = {options}
                width="100%"
                height="400px"
                data={data}
        />
    );
        
    }

}

export default Barchart;

// const options = {
//         title: {
//             text: "Best Selling Product"
//         },
//         data: [{				
//             type: "column",
//             dataPoints: [
//             { label: "Apple",  y: 10  },
//             { label: "Orange", y: 15  },
//             { label: "Banana", y: 25  },
//             { label: "Mango",  y: 30  },
//             { label: "Grape",  y: 28  }
//             ]
//         }],
//         }
//         return (
//             <div className="first-graph">
//                 <CanvasJSChart options = {options}/>
//             </div>
//         );