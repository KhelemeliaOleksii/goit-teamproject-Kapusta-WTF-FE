import { toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../../redux/transaction/transaction-operations';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import Dropdown from '../Dropdown';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import { ReactComponent as Calculator } from '../../images/svg/calculator.svg';
import getDate from '../../helpers/getData/getDate';
import s from './ModalMobileHome.module.css';

function ModalMobileHome({ closeModal, category, }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');

  const calendarDate = useSelector(transactionSelectors.getDate);
  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === 'expenses' && balance < InputMoney) {
      toast.error('Не достатньо коштів', { theme: 'dark' });
      return;
    }
    if (category === 'income' && (balance + Number(InputMoney) > 1000000)) {
      toast.error('баланс на рахунку не має перевищувати 1 мільйон', { theme: 'dark' });
      return;
    }
    const data = {
      date: calendarDate,
      description: {
        descriptionName: inputValue,
      },
      transactionType: category,
      categoryId: selected,
      amount: Number(InputMoney),
    };

    closeModal();
    await dispatch(transactionOperations.addTransaction(data));
    await dispatch(transactionOperations.getTransaction(startDay));
    await dispatch(authOperations.getBalance());
    reset();
  };

  return (
    <div className={s.modalMobileHome}>
      <Arrow
        color="#FF751D"
        style={{ position: 'absolute', top: 22, left: 22 }}
        onClick={closeModal}
      />
      <form onSubmit={handleSubmit} className={s.formMobileHome}>
        <input
          className={s.inputMobileHome}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={category === 'expenses' ? 'Опис товару' : 'Опис доходу'}
          required
        />
        <Dropdown category={category} selected={selected} setSelected={setSelected} />
        <div className={s.wrappMobileInput}>
          <input
            className={s.transactionMobileInput}
            value={InputMoney}
            onChange={handleInputMoneyChange}
            placeholder="0.00"
            pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
            required
            title="Використайте числовий формат"
            autoComplete="off"
          />
          <div className={s.wrappMobileIcon}>
            <Calculator />
          </div>
        </div>
        <ul className={s.mobilelist}>
          <li className={s.mobileItem}>
            <button className={s.mobileButton} type="submit" style={{ background: '#FF751D', color: '#ffffff' }}>Додати</button>
          </li>
          <li>
            <button className={s.mobileButton} type="button" onClick={reset} style={{ background: '##FFFFFF', color: '#52555F' }}>Очистити</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ModalMobileHome;

ModalMobileHome.propTypes = {
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
