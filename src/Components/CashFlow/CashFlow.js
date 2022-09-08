import { useSelector } from 'react-redux';
import s from './CashFlow.module.css';

export default function CashFlow() {
  const userMount = useSelector((state) => state.reportReducer.userMount);
  const mounthMount = {
    expenses: 0,
    income: 0,
  };
  userMount.map(({ _id, totalAmount }) => {
    if (_id === 'expenses') {
      mounthMount.expenses = totalAmount;
    } else if (_id === 'income') {
      mounthMount.income = totalAmount;
    }
    return mounthMount;
  });

  return (
    <div className={s.container}>
      <div className={s.expenses}>
        <p className={s.p}>Витрати:</p>
        <span>- {mounthMount.expenses}грн.</span>
      </div>
      <div className={s.income}>
        <p className={s.p}>Доходи:</p>
        <span>+ {mounthMount.income}грн.</span>
      </div>
    </div>
  );
}
