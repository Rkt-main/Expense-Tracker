import React from "react";

import Chartbar from "./ChartBar";
import "./chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        <Chartbar
          key={datapoint.id}
          value={datapoint.value}
          maxvalue={null}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
