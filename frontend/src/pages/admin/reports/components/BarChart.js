import React, { Component } from 'react';
import Chart from "react-google-charts";

const data = [
  ["Element", "No. of Items", { role: "style" }],
  ["Avacado", 8.94, "#b87333"], // RGB value
  ["Mango", 10.49, "silver"], // English color name
  ["Orchid", 19.3, "gold"],
  ["Anthurium", 21.45, "color: #e5e4e2"] // CSS-style declaration
];
const options = {
    title: "Best Selling Product",
}

class BarChart extends Component {
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

export default BarChart;

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