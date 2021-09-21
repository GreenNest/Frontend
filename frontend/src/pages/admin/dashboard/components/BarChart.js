import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import CustomerService from '../../../../services/CustomerService';
import { useHistory } from 'react-router-dom';

// const data1 = [
//   ["Element", "Density", { role: "style" }],
//   ["Anthurium", 8.94, "#b87333"], // RGB value
//   ["Orchid", 10.49, "silver"], // English color name
//   ["Mango", 19.3, "gold"],
//   ["Guava", 21.45, "color: #e5e4e2"], // CSS-style declaration
// ];
const options = {
    title: "Product count in each category",
}

function BarChart() {
    const [data, setData] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        getOrders();
        
    }, [])

    const getOrders = async() => {
        const x = await CustomerService.getCategoryCount().then((res) => {
            if(res.data.data != null){
                setData(res.data.data);
            }
            // console.log(res.data.data);
            createData(res.data.data);
        }).catch((err) => {
            console.log(err);
            // if(err.response.status == 401){
            //     history.push("/login");
            // }
        })
    };

    const createData = (x) => {
        let data3 = [
            ["Element", "count", { role: "style" }]
        ];

        const obj = { a: 5, b: 7, c: 9 };
        for (const [key, value] of Object.entries(x)) {
            //console.log(`${key} ${value}`);
            const y = [key, parseInt(value), "gold"];
            data3.push(y);
        }
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