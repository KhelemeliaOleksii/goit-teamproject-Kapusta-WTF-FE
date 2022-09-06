import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import Dropdown from '../Dropdown';
import s from './ModalMobileHome.module.css';
import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg';
import { ReactComponent as Calculator } from '../../images/svg/calculator.svg';

// const options = [
//   { category: 'expenses', value: 'Transport', id: '63121fd1313da79b043d7b95' },
//   { category: 'expenses', value: 'Products', id: '63121fd1313da79b043d7b96' },
//   { category: 'expenses', value: 'Health', id: '63121fd1313da79b043d7b97' },
//   { category: 'expenses', value: 'Алкоголь', id: '63121fd1313da79b043d7b98' },
//   { category: 'expenses', value: 'Housing', id: '63121fd1313da79b043d7b9a' },
//   { category: 'expenses', value: 'Technique', id: '63121fd1313da79b043d7b9b' },
//   {
//     category: 'expenses',
//     value: 'Communal, communication',
//     id: '63121fd1313da79b043d7b9c',
//   },
//   {
//     category: 'expenses',
//     value: 'Sports, hobbies',
//     id: '63121fd1313da79b043d7b9d',
//   },
//   { category: 'expenses', value: 'Education', id: '63121fd1313da79b043d7b9e' },
//   {
//     category: 'expenses',
//     value: 'Домашні улюбленці',
//     id: '63121fd1313da79b043d7b9f',
//   },
//   {
//     category: 'expenses',
//     value: 'Благодійність',
//     id: '63121fd1313da79b043d7ba0',
//   },
//   { category: 'expenses', value: 'Інше', id: '63121fd1313da79b043d7ba1' },
//   { category: 'income', value: 'Salary', id: '63121fd1313da79b043d7ba2' },
//   { category: 'income', value: 'Дод. дохід"', id: '63121fd1313da79b043d7ba3' },
// ];

function ModalExpenenses({ closeModal, category }) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');
  const calendarDate = useSelector(transactionSelectors.getDate);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  // const handleSelectedChange = (event) => {
  //   setSelected(event.target.value);
  // };

  const handleInputMoneyChange = (e) => {
    setinputMoney(e.currentTarget.value);
  };
  const reset = () => {
    setInputValue('');
    setSelected('');
    setinputMoney('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: calendarDate,
      description: {
        descriptionName: inputValue,
      },
      transactionType: category,
      categoryId: selected,
      amount: Number(InputMoney),
    };
    dispatch(transactionOperations.addTransaction(data));
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
          placeholder={`${category} description`}
        />
        <Dropdown category={category} selected={selected} setSelected={setSelected} />

        {/* <select
          className={s.SelectMobileHome}
          value={selected}
          onChange={handleSelectedChange}
        >
          <option disabled value="">
            {`${category} description`}
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select> */}
        <div className={s.wrappMobileInput}>
          <input
            className={s.transactionMobileInput}
            value={InputMoney}
            onChange={handleInputMoneyChange}
            placeholder="0.00"
            title="Используйте числовой формат"
            pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
            autoComplete="off"
          />
          <div className={s.wrappMobileIcon}>
            <Calculator />
          </div>
        </div>
        <ul className={s.listMobileButton}>
          <li className={s.listButtonItem}>
            <Button
              name="Input"
              type="submit"
              style={{ background: '#FF751D', color: '#ffffff' }}
            />
          </li>
          <li>
            <Button
              name="Clear"
              type="button"
              onClick={reset}
              style={{ background: '##FFFFFF', color: '#52555F' }}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ModalExpenenses;

ModalExpenenses.propTypes = {
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
