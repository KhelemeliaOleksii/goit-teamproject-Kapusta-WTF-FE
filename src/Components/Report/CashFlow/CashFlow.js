import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CashFlow.module.css';
import reportOperations from '../../../redux/report/report-operations';

export default function CashFlow() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reportOperations.userMount());
  }, [dispatch]);
  const userMount = useSelector((state) => state.reportReducer.userMount);
  console.log(userMount);
  // userMount.map((mount) => {
  //   console.log(mount._id);
  // });
  return (
    <div className={s.container}>
      <div className={s.expenses}>
        <p className={s.p}>Expenses:</p>
        <span>- грн.</span>
      </div>
      <div className={s.income}>
        <p className={s.p}>Income:</p>
        <span>+ грн.</span>
      </div>
    </div>
  );
}
