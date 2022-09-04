import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarForm from '../CalendarForm';
import Button from '../Button';
import s from './FormTransaction.module.css';
import transactionOperations from '../../redux/transaction/transaction-operations';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import { ReactComponent as Calculator } from '../../images/svg/calculator.svg';

const options = [
  { category: 'expenses', value: 'Transport', id: '63121fd1313da79b043d7b95' },
  { category: 'expenses', value: 'Products', id: '63121fd1313da79b043d7b96' },
  { category: 'expenses', value: 'Health', id: '63121fd1313da79b043d7b97' },
  { category: 'expenses', value: 'Алкоголь', id: '63121fd1313da79b043d7b98' },
  { category: 'expenses', value: 'Housing', id: '63121fd1313da79b043d7b9a' },
  { category: 'expenses', value: 'Technique', id: '63121fd1313da79b043d7b9b' },
  { category: 'expenses', value: 'Communal, communication', id: '63121fd1313da79b043d7b9c' },
  { category: 'expenses', value: 'Sports, hobbies', id: '63121fd1313da79b043d7b9d' },
  { category: 'expenses', value: 'Education', id: '63121fd1313da79b043d7b9e' },
  { category: 'expenses', value: 'Домашні улюбленці', id: '63121fd1313da79b043d7b9f' },
  { category: 'expenses', value: 'Благодійність', id: '63121fd1313da79b043d7ba0' },
  { category: 'expenses', value: 'Інше', id: '63121fd1313da79b043d7ba1' },
  { category: 'income', value: 'Salary', id: '63121fd1313da79b043d7ba2' },
  { category: 'income', value: 'Дод. дохід"', id: '63121fd1313da79b043d7ba3' },
];

function FormTransaction({ category }) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');
  const calendarDate = useSelector(transactionSelectors.getDate);
  const dispatch = useDispatch();
  let description;
  switch (category) {
    case 'expenses':
      description = 'товару';
      break;

    case 'income':
      description = 'витрат';
      break;

    default:
      description = '';
  }

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleSelectedChange = (e) => {
    setSelected(e.target.value);
  };
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
        descriptionName: inputValue
      },
      transactionType: category,
      categoryId: selected,
      amount: Number(InputMoney)
    };
    dispatch(transactionOperations.addTransaction(data));
    reset();
  };

  const filterOption = options.filter((option) => option.category === category);

  return (
    <form className={s.formTransaction} onSubmit={handleSubmit}>
      <CalendarForm />
      <div className={s.wrapperImputForm}>
        <input
          className={s.transactioninput}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={`опис ${description}`}
        />
        <select
          className={s.transactionSelect}
          value={selected}
          onChange={handleSelectedChange}
        >
          <option disabled value="">
            {`категорії ${description}`}
          </option>
          {filterOption.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
        <input
          className={s.transactionMoneyinput}
          value={InputMoney}
          onChange={handleInputMoneyChange}
          placeholder="0,00"
          title="Используйте числовой формат"
          pattern="^\d+(?:[.]\d+)?(?:\d+(?:[.]\d+)?)*$"
          autoComplete="off"
        />
        <Calculator
          color="#1D2E4A"
          size={20}
          style={{ position: 'absolute', right: 22, top: 14 }}
        />
      </div>
      <ul className={s.transactionListButton}>
        <li className={s.transactionListButtonItem}>
          <Button name="Прийняти" type="submit" style={{ background: '#FF751D', color: '#ffffff' }} />
        </li>
        <li>
          <Button name="Скинути" type="button" onClick={reset} style={{ background: '##FFFFFF', color: '#52555F' }} />
        </li>
      </ul>
    </form>
  );
}
export default FormTransaction;

FormTransaction.propTypes = {
  category: PropTypes.string.isRequired,
};
