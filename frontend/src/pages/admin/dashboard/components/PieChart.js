import React, { useState, useEffect } from 'react';
import Chart from "react-google-charts";
import CustomerService from '../../../../services/CustomerService';
import { useParams, Redirect, useHistory } from 'react-router-dom';

const pieOptions = {
  title: "Weekly Order Statistics",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

function PieChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
    
  }, [])

  const getData = async() => {
    const x = await CustomerService.getOrderCount().then((res) => {
      if(res.data.data != null){
        setData(res.data.data);
      }
      // console.log(res.data.data);
    }).catch((err) => {

    })
  }

  return (
    <Chart
      chartType="PieChart"
      data={[["Orders", "Count"], ["Cash On Delivery Orders", data[0]], ["Online Orders", data[1]]]}
      options={pieOptions}
      graph_id="PieChart"
      width={"100%"}
      height={"90%"}
      legend_toggle
    />
  );
    
}

export default PieChart;
