// import { GoCalendar } from 'react-icons/go';
import { useSelector } from 'react-redux';
import Table from '../Table';
import FormTransaction from '../FormTransaction';
import s from './WindowTransaction.module.css';
import transactionSelectors from '../../redux/transaction/transaction-selectors';

function WindowTransaction() {
  const type = useSelector(transactionSelectors.getType);
  return (
    <div className={s.windowBox}>
      <FormTransaction category={type} />
      {type === 'income' && (<Table category={type} />)}
      {type === 'expenses' && (<Table category={type} />)}
    </div>
  );
}

export default WindowTransaction;
