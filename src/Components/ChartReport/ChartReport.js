import PropTypes from "prop-types";
// import React from "react";

// import s from "./ChartReport.module.css";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export default function KapustaChart({ expences }) {
  return (
    <div style={{ width: "50%" }}>
      <Chart
        type="bar"
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
        data={{
          labels: expences.map((item) => item.goods),
          datasets: [
            {
              data: expences.map((item) => item.amount),
              barThickness: 25,
              backgroundColor: ["#FF751D", "#FFDAC0", "#FFDAC0"],
              borderWidth: 2,
              borderRadius: 8,

              // borderRadius: Number.MAX_VALUE,
              borderSkipped: true,
            },
          ],
        }}
      />
    </div>
  );
}

KapustaChart.propTypes = {
  expences: PropTypes.arrayOf(
    PropTypes.shape({
      goods: PropTypes.string.isRequired,
      amount: PropTypes.number,
    })
  ).isRequired,
};
