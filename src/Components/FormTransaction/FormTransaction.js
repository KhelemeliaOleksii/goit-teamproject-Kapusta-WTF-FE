import { useState } from 'react';
import { BsFillCalculatorFill } from 'react-icons/bs';
import CalendarForm from '../CalendarForm';
import Button from '../Button';
import s from './FormTransaction.module.css';

const options = [
  { value: 'Транспорт', id: 2 },
  { value: 'Продукты', id: 3 },
  { value: 'Здоровье', id: 1 },
];
function FormTransaction() {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');
  const [calendarValue] = useState(new Date());
  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleSelectedChange = (event) => {
    setSelected(event.target.value);
  };

  const handleInputMoneyChange = (e) => {
    setinputMoney(e.currentTarget.value);
  };

  return (
    <form className={s.formTransaction}>
      <CalendarForm data={calendarValue} />
      <div className={s.wrapperImputForm}>
        <input
          className={s.transactioninput}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Product description"
        />
        <select
          className={s.transactionSelect}
          value={selected}
          onChange={handleSelectedChange}
        >
          <option disabled value="">
            Product category
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        <input
          className={s.transactionMoneyinput}
          value={InputMoney}
          onChange={handleInputMoneyChange}
          placeholder="0,00"
        />
        <BsFillCalculatorFill
          color="#1D2E4A"
          size={20}
          style={{ position: 'absolute', right: 22, top: 14 }}
        />
      </div>
      <ul className={s.transactionListButton}>
        <li className={s.transactionListButtonItem}>
          <Button name="Input" style={{ background: '#FF751D', color: '#ffffff' }} />
        </li>
        <li>
          <Button name="Clear" />
        </li>
      </ul>
    </form>
  );
}
export default FormTransaction;
