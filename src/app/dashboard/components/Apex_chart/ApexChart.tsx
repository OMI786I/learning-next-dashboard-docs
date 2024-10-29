// components/ApexChart.js
"use client";
import axios from "axios";
import { error } from "console";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { inflate } from "zlib";

// Dynamically import ReactApexChart to avoid server-side rendering
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const [data, setData] = useState([]);

  // Using useState instead of this.state for functional components
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Inflation",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/chart")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    // Calculate chartData2 based on the latest `data`
    const chartData2 = data.map((res) => res.revenue / 5000);
    // Update chartData with new `chartData2`
    setChartData((prevChartData) => ({
      ...prevChartData,
      series: [{ ...prevChartData.series[0], data: chartData2 }],
    }));
  }, [data]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexChart;
