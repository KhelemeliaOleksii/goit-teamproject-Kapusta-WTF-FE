import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../Table';
import FormTransaction from '../FormTransaction';
import s from './WindowTransaction.module.css';
import transactionSelectors from '../../redux/transaction/transaction-selectors';

function WindowTransaction({ onTransactionPerform }) {
  const type = useSelector(transactionSelectors.getType);
  return (
    <div className={s.windowBox}>
      <FormTransaction category={type} onTransactionPerform={onTransactionPerform} />
      {type === 'income' && (<Table category={type} />)}
      {type === 'expenses' && (<Table category={type} />)}
    </div>
  );
}

export default WindowTransaction;

WindowTransaction.propTypes = {
  onTransactionPerform: PropTypes.func.isRequired
};
