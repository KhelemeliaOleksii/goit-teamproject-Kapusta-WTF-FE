/* eslint-disable no-underscore-dangle */

import { useSelector } from 'react-redux';
import s from './CashFlow.module.css';

export default function CashFlow() {
  const userMount = useSelector((state) => state.reportReducer.userMount);
  const mounthMount = {
    expenses: 0,
    income: 0,
  };
  userMount.map((mount) => {
    if (mount._id === 'expenses') {
      mounthMount.expenses = mount.totalAmount;
    } else if (mount._id === 'income') {
      mounthMount.income = mount.totalAmount;
    }
    return mounthMount;
  });

  return (
    <div className={s.container}>
      <div className={s.expenses}>
        <p className={s.p}>Expenses:</p>
        <span>- {mounthMount.expenses}грн.</span>
      </div>
      <div className={s.income}>
        <p className={s.p}>Income:</p>
        <span>+ {mounthMount.income}грн.</span>
      </div>
    </div>
  );
}
