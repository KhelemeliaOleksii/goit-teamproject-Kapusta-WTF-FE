/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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
import reportSelectors from '../../redux/report/report-selectors';
import s from './ChartReport.module.css';
import useWindowDimensions from '../Hooks';

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
          labels: transactions.map((item) => item._id),
          datasets: [
            {
              data: transactions.map((item) => item.totalAmount),
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
          labels: transactions.map((item) => item._id),
          datasets: [
            {
              data: transactions.map((item) => item.totalAmount),
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

export default function KapustaChart() {
  const viewPort = useWindowDimensions();
  const category = useSelector(reportSelectors.getActiveCategoryId);
  const expences = useSelector(reportSelectors.getTransactionDesc);
  if (expences.length === 0) {
    return <div />;
  }
  if (category === null) {
    return <div />;
  }
  const expencesSort = [...expences].sort(
    (min, max) => max.totalAmount - min.totalAmount
  );

  return (
    expencesSort.length > 0 && (
      <div className={s.container}>
        {viewPort.width < 768 && <ChartMobile transactions={expencesSort} />}
        {viewPort.width >= 768 && <ChartDesktop transactions={expencesSort} />}
      </div>
    )
  );
}

// KapustaChart.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       goods: PropTypes.string.isRequired,
//       amount: PropTypes.number,
//     })
//   ).isRequired,
// };

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
