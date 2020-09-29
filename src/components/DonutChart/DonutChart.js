import React, { PureComponent } from "react";
import Chart from "chart.js";

let thisDonutChart;

export default class DonutChart extends PureComponent {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }
  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    if (this.chartRef.current) {
      const myChartRef = this.chartRef.current.getContext("2d");

      if (typeof thisDonutChart !== "undefined") thisDonutChart.destroy();

      thisDonutChart = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: ["Pending", "Approved", "Rejected"],
          datasets: [
            {
              data: [65, 25, 10],
              backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"],
              hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
              hoverBorderColor: "rgba(234, 236, 244, 1)",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false,
          },
          cutoutPercentage: 80,
        },
      });
    }
  };

  render() {
    return (
        <canvas id="myPieChart" ref={this.chartRef}></canvas>
    );
  }
}
