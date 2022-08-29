import s from './CashFlow.module.css';

const obj = {
  expenses: 200,
  income: 2000,
};

export default function CashFlow() {
  return (
    <div className={s.container}>
      <div className={s.expenses}>
        <p className={s.p}>Expenses:</p>
        <span>- {obj.expenses} грн.</span>
      </div>
      <div className={s.income}>
        <p className={s.p}>Income:</p>
        <span>+ {obj.income} грн.</span>
      </div>
    </div>
  );
}
