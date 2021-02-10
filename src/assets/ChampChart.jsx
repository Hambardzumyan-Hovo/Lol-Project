import React from "react";
import Chart from "chart.js";
import "./ChampSlider.css";

class ChampChart extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const stats = Object.values(this.props.info);
    new Chart(myChartRef, {
      type: "polarArea",
      data: {
        labels: ["Attack Damage", "Defence", "Magic Damage", "Difficulty"],
        datasets: [
          {
            label: "Info",
            data: stats,
            backgroundColor: ["#F7464A", "#FDB45C", "#0696AA", "#008C5B"],
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 13,
          },
        },
        scale: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
  render() {
    return (
      <div className='chart-container'>
        <canvas id='myChart' ref={this.chartRef} />
      </div>
    );
  }
}

export default ChampChart;
