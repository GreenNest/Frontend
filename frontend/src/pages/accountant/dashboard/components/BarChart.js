import React, { useState, useEffect } from 'react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Chart from "react-google-charts";
import CustomerService from '../../../../services/CustomerService';

const options = {
    title: "Best Selling Product",
}

function BarChart(){
    // const [data2, setData2] = useState({});
    //     console.log(props.orders);

    //     // const data = [
    //     //     ["Element", "No. of Items", { role: "style" }],
    //     //     ["January", props.orders[0], "#b87333"], // RGB value
    //     //     ["February", props.orders[1], "silver"], // English color name
    //     //     ["March", props.orders[2], "gold"],
    //     //     ["April", props.orders[3], "color: #e5e4e2"] // CSS-style declaration
    //     // ];
    //     // setData2(data); 
   
    // useEffect(() => {
    //     console.log(props.orders);
    //     const data = [
    //         ["Element", "No. of Items", { role: "style" }],
    //         ["January", parseInt(props.orders[0]), "#b87333"], // RGB value
    //         ["February", parseInt(props.orders[1]), "silver"], // English color name
    //         ["March", parseInt(props.orders[2]), "gold"],
    //         ["April", parseInt(props.orders[3]), "color: #e5e4e2"] // CSS-style declaration
    //     ];
    //     setData2(data);  
        
    // }, [])
    const [data, setData] = useState([]);
    const [data2, setData2] = useState({});
    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async() => {
        const x = await CustomerService.getGraphOrderData().then((res) => {
            if(res.data.data != null){
                setData(res.data.data);
            }
            // const data3 = [
            //     ["Element", "No. of Items", { role: "style" }],
            //     ["January", parseInt(data[0]), "#b87333"], // RGB value
            //     ["February", parseInt(data[1]), "silver"], // English color name
            //     ["March", parseInt(data[2]), "gold"],
            //     ["April", parseInt(data[3]), "color: #e5e4e2"] // CSS-style declaration
            // ];
            // setData2(data3);
            console.log(res.data.data);
            
        }).catch((err) => {
            console.log(err.response);
        })
    };

    const createData = (x) => {
        const data3 = [
                ["Element", "No. of Items", { role: "style" }],
                ["January", parseInt(x[0]), "#b87333"], // RGB value
                ["February", parseInt(x[1]), "silver"], // English color name
                ["March", parseInt(x[2]), "gold"],
                ["April", parseInt(x[3]), "color: #e5e4e2"] // CSS-style declaration
            ];
            //setData2(data3);
            return data3;
    }
    
        return (
            <Chart
                chartType="ColumnChart"
                options = {options}
                width="100%"
                height="400px"
                data={createData(data)}
        />
    );        
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