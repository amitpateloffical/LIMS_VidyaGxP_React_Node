import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

export const options = {
  title: "Bar/area interval chart",
  curveType: "function",
  intervals: { color: "series-color" },
  interval: {
    i0: {
      color: "#4374E0",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i1: {
      color: "#E49307",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
  },
  legend: "none",
};

export function Chart5() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Chart5;
