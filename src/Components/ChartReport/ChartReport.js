import PropTypes from 'prop-types';
// import React from "react";

import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import s from './ChartReport.module.css';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartDataLabels
);

export default function KapustaChart({ expences }) {
  return (
    <div className={s.container} style={{ width: '50%' }}>
      <Chart
        type="bar"
        plugins={[ChartDataLabels]}
        options={{
          responsive: true,
          // indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            datalabels: {
              color: '#52555F',
              align: 'end',
              anchor: 'end',
              formatter: (value) => `${value} грн`,
            },
          },
        }}
        data={{
          labels: expences.map((item) => item.goods),
          datasets: [
            {
              data: expences.map((item) => item.amount),
              barThickness: 50,
              backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
              borderWidth: 2,
              borderRadius: 8,
              borderSkipped: [false],
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
