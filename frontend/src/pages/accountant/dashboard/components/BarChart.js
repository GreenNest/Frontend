import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import CustomerService from '../../../../services/CustomerService';
import { useParams, Redirect, useHistory } from 'react-router-dom';

const options = {
    title: "Monthly Orders",
}

function BarChart(){
    const [data, setData] = useState([]);
    const [data2, setData2] = useState({});
    const history = useHistory();
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
            if(err.response.status == 401){
                history.push("/login");
            }
        })
    };

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


export default BarChart;