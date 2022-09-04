import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Summary.module.css';
import summaryOperations from '../../redux/summary/summary-operations';
import summarySelectors from '../../redux/summary/summary-selectors';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import getMonth from '../../helpers/getMonth/getMonth';

function Summary() {
  const dispatch = useDispatch();
  const type = useSelector(transactionSelectors.getType);
  useEffect(() => {
    dispatch(summaryOperations.getTransactionPerMouth(type));
  }, [dispatch, type]);
  const mounth = useSelector(summarySelectors.getSummary);
  return (
    <div>
      <h3 className={s.summaryTitle}>Зведення</h3>
      <ul className={s.summaryList}>
        {mounth.map(({ totalAmount, _id }) => (
          <li key={_id} className={s.summaryItem}>
            <p className={s.summaryText}>{getMonth(_id)}</p>
            <p className={s.summaryText}>{totalAmount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Summary;
