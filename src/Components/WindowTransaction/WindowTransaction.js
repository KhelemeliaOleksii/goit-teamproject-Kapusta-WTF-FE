import { useSelector } from 'react-redux';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import Table from '../Table';
import FormTransaction from '../FormTransaction';
import s from './WindowTransaction.module.css';

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
