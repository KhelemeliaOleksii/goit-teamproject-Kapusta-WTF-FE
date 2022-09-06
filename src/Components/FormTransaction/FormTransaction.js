import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarForm from '../CalendarForm';
import Dropdown from '../Dropdown';
import s from './FormTransaction.module.css';
import transactionOperations from '../../redux/transaction/transaction-operations';
import summaryOperations from '../../redux/summary/summary-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
// import balanceSelectors from '../../redux/balance/balance-selectors';
import balanceOperations from '../../redux/balance/balance-operations';
import { ReactComponent as Calculator } from '../../images/svg/calculator.svg';
import getDate from '../../helpers/getData/getDate';
import 'react-toastify/dist/ReactToastify.css';

function FormTransaction({ category }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');

  const calendarDate = useSelector(transactionSelectors.getDate);
  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);
  const type = useSelector(transactionSelectors.getType);
  // const balance = useSelector(balanceSelectors.getBalance);
  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleInputMoneyChange = (e) => {
    setinputMoney(e.currentTarget.value);
  };
  const reset = () => {
    setInputValue('');
    setSelected('');
    setinputMoney('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date: calendarDate,
      description: {
        descriptionName: inputValue
      },
      transactionType: category,
      categoryId: selected,
      amount: Number(InputMoney)
    };
    await dispatch(transactionOperations.addTransaction(data));
    await dispatch(transactionOperations.getTransaction(startDay));
    await dispatch(balanceOperations.getBalance());
    await dispatch(summaryOperations.getTransactionPerMouth(type));
    toast.success('Операцiя пройшла успiшно', { theme: 'dark' });
    reset();
  };

  return (
    <form className={s.formTransaction} onSubmit={handleSubmit}>
      <CalendarForm />
      <div className={s.wrapperImputForm}>
        <input
          className={s.transactioninput}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={category === 'expenses' ? 'опис товару' : 'опис доходу'}
          required
        />
        <Dropdown category={category} selected={selected} setSelected={setSelected} />
        <input
          className={s.transactionMoneyinput}
          value={InputMoney}
          onChange={handleInputMoneyChange}
          placeholder="0,00"
          title="Используйте числовой формат"
          pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
          autoComplete="off"
          required
        />
        <Calculator
          color="#1D2E4A"
          size={20}
          style={{
            position: 'absolute',
            right: 22,
            top: 14,
            marginRight: 5
          }}
        />
      </div>
      <ul className={s.transactionListButton}>
        <li className={s.transactionListButtonItem}>
          <button className={s.transactionButton} type="submit" style={{ background: '#FF751D', color: '#ffffff' }}>Прийняти</button>
        </li>
        <li>
          <button className={s.transactionButton} type="button" onClick={reset} style={{ background: '##FFFFFF', color: '#52555F' }}>Скинути</button>
        </li>
      </ul>
    </form>
  );
}
export default FormTransaction;

FormTransaction.propTypes = {
  category: PropTypes.string.isRequired,
};
