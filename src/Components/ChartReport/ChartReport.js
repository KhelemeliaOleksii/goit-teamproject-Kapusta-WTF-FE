import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';
import reportSelectors from '../../redux/report/report-selectors';
import useWindowDimensions from '../Hooks';
import s from './ChartReport.module.css';

ChartJS.register(...registerables, zoomPlugin);

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
            zoom: {
              pan: {
                enabled: true,
                mode: 'x'
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'x',
              },
            },
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
          labels: transactions.map(({ _id }) => _id),
          datasets: [
            {
              data: transactions.map(({ totalAmount }) => totalAmount),
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
          labels: transactions.map(({ _id }) => _id),
          datasets: [
            {
              data: transactions.map(({ totalAmount }) => totalAmount),
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
  const expences = useSelector(reportSelectors.getTransactionDesc);

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

ChartMobile.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      totalAmount: PropTypes.number,
    })
  ).isRequired,
};

ChartDesktop.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      totalAmount: PropTypes.number,
    })
  ).isRequired,
};
