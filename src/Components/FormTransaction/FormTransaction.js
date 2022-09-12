import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../redux/transaction/transaction-operations';
import summaryOperations from '../../redux/summary/summary-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { ReactComponent as Calculator } from '../../images/svg/calculator.svg';
import getDate from '../../helpers/getData/getDate';
import CalendarForm from '../CalendarForm';
import Dropdown from '../Dropdown';
import 'react-toastify/dist/ReactToastify.css';
import s from './FormTransaction.module.css';

function FormTransaction({ category }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');

  const calendarDate = useSelector(transactionSelectors.getDate);
  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);
  const type = useSelector(transactionSelectors.getType);
  const balance = useSelector(authSelectors.getBalance);

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
  useEffect(() => {
    reset();
  }, [type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === 'expenses' && balance < InputMoney) {
      toast.error('Не достатньо коштів');
      return;
    }
    if (category === 'income' && (balance + Number(InputMoney) > 1000000)) {
      toast.error('Баланс на рахунку не може перевищувати 1 мільйон');
      return;
    }
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
    await dispatch(authOperations.getBalance());
    await dispatch(summaryOperations.getTransactionPerMouth(type));
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
          placeholder={category === 'expenses' ? 'Опис товару' : 'Опис доходу'}
          required
        />
        <Dropdown category={category} selected={selected} setSelected={setSelected} />
        <input
          className={s.transactionMoneyinput}
          value={InputMoney}
          onChange={handleInputMoneyChange}
          placeholder="0,00"
          title="Використайте числовий формат"
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
          <button className={s.transactionButtonEnter} type="submit">Додати</button>
        </li>
        <li>
          <button className={s.transactionButtonReset} type="button" onClick={reset}>Очистити</button>
        </li>
      </ul>
    </form>
  );
}
export default FormTransaction;

FormTransaction.propTypes = {
  category: PropTypes.string.isRequired,
};
