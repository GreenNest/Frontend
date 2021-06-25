import React, { Component } from 'react';
import CanvasJSReact from '../../../../lib/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class BarChart extends Component {
    render() {
        const options = {
        title: {
            text: "Best Selling Product"
        },
        data: [{				
            type: "column",
            dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
            ]
        }],
        }
        return (
            <div className="first-graph">
                <CanvasJSChart options = {options}/>
            </div>
        );
    }

}

export default BarChart;
