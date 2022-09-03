import s from './Summary.module.css';

const Data = [
  { prise: 1000, month: 'November' },
  { prise: 2000, month: 'October' },
  { prise: 3000, month: 'September' },
  { prise: 40000, month: 'August' },
  { prise: 6000, month: 'July' },
  { prise: 4000, month: 'June' },
];
function Summary() {
  return (
    <div>
      <h3 className={s.summaryTitle}>Summary</h3>
      <ul className={s.summaryList}>
        {Data.map(({ prise, month }) => (
          <li key={month} className={s.summaryItem}>
            <p className={s.summaryText}>{month}</p>
            <p className={s.summaryText}>{prise}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Summary;
