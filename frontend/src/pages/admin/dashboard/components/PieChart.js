import React, { Component } from 'react';
import Chart from "react-google-charts";

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

class PieChart extends Component {
    render() {
        return (
                <Chart
                    chartType="PieChart"
                    data={[["Age", "Weight"], ["Upcoming Orders", 12], ["Ongoing Orders", 5.5]]}
                    options={pieOptions}
                    graph_id="PieChart"
                    width={"100%"}
                    height={"90%"}
                    legend_toggle
                />
        );
    }
}

export default PieChart;
