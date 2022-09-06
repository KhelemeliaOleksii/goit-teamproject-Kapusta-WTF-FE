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
import useWindowDimensions from '../Hooks';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ChartDataLabels,
);

function ChartDesktop({ transactions = [] }) {
  if (transactions.length === 0) {
    return null;
  }
  return (
    <div style={{ width: '100%' }}>
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
          layout: {
            padding: {
              top: 50,
            },
          },
          plugins: {
            datalabels: {
              color: '#52555F',
              align: 'end',
              anchor: 'end',
              formatter: (value) => `${value} грн`,
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: transactions.map((item) => item.goods),
          datasets: [
            {
              data: transactions.map((item) => item.amount),
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

function ChartMobile({ transactions = [] }) {
  if (transactions.length === 0) {
    return null;
  }
  return (
    <div style={{ width: '100%' }}>
      <Chart
        type="bar"
        plugins={[ChartDataLabels]}
        options={{
          responsive: true,
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          layout: {
            padding: {
              right: 10,
            },
          },
          plugins: {
            datalabels: {
              color: '#52555F',
              align: 'top',
              anchor: 'end',
              formatter: (value) => `${value} грн`,
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: transactions.map((item) => item.goods),
          datasets: [
            {
              data: transactions.map((item) => item.amount),
              barThickness: 10,
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

export default function KapustaChart({ transactions }) {
  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width < 768 && <ChartMobile transactions={transactions} />}
      {viewPort.width >= 768 && <ChartDesktop transactions={transactions} />}
    </>
  );
}

KapustaChart.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      goods: PropTypes.string.isRequired,
      amount: PropTypes.number,
    })
  ).isRequired,
};

ChartMobile.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      goods: PropTypes.string.isRequired,
      amount: PropTypes.number,
    })
  ).isRequired,
};

ChartDesktop.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      goods: PropTypes.string.isRequired,
      amount: PropTypes.number,
    })
  ).isRequired,
};
