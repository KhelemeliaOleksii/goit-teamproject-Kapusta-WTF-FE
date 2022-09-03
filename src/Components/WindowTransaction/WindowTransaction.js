// import { GoCalendar } from 'react-icons/go';
import PropTypes from 'prop-types';
import Table from '../Table';
import FormTransaction from '../FormTransaction';
import s from './WindowTransaction.module.css';

function WindowTransaction({ tableExpenenses, tableIncome }) {
  return (
    <div className={s.windowBox}>
      <FormTransaction />
      {tableExpenenses && (<Table category="income" />)}
      {tableIncome && (<Table category="expenenses" />)}
    </div>
  );
}

export default WindowTransaction;

WindowTransaction.propTypes = {
  tableExpenenses: PropTypes.bool.isRequired,
  tableIncome: PropTypes.bool.isRequired
};
