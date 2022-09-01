import s from './Summary.module.css';

const Data = [
  { prise: 1000, mount: 'November' },
  { prise: 2000, mount: 'October' },
  { prise: 3000, mount: 'September' },
  { prise: 40000, mount: 'August' },
  { prise: 6000, mount: 'July' },
  { prise: 4000, mount: 'June' },
];
function Summary() {
  return (
    <div>
      <h3 className={s.summaryTitle}>Summary</h3>
      <ul className={s.summaryList}>
        {Data.map(({ prise, mount }) => (
          <li key={s.pise} className={s.summaryItem}>
            <p className={s.summaryText}>{mount}</p>
            <p className={s.summaryText}>{prise}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Summary;
