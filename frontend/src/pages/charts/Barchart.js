import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import CustomerService from '../../services/CustomerService';
import { useHistory } from 'react-router-dom';

const options = {
    title: "Leave Statistics",
}

function Barchart(){
    const [data, setData] = useState([]);
    const history = useHistory();
    const x = JSON.parse(localStorage.getItem('authorization')); 
    useEffect(() => {
        leaveCount(x.eid);
    }, [])

    const leaveCount = async(id) => {
        const x = await CustomerService.getGraphLeaveCount(id).then((res) => {
            if(res.data.data != null){
                setData(res.data.data);
            }
        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }
        })
    }

    const createData = (x) => {
        const data3 = [
                ["Element", "Orders", { role: "style" }],
                ["January", parseInt(x[0]), "#b87333"], 
                ["February", parseInt(x[1]), "silver"], 
                ["March", parseInt(x[2]), "gold"],
                ["April", parseInt(x[3]), "color: #e5e4e2"],
                ["May", parseInt(x[4]), "#b87333"], 
                ["June", parseInt(x[5]), "silver"], 
                ["July", parseInt(x[6]), "gold"],
                ["August", parseInt(x[7]), "color: #e5e4e2"] ,
                ["September", parseInt(x[8]), "#b87333"], 
                ["Octomber", parseInt(x[9]), "silver"], 
                ["November", parseInt(x[10]), "gold"],
                ["December", parseInt(x[11]), "color: #e5e4e2"]  
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