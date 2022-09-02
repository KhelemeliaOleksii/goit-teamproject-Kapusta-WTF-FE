import PropTypes from 'prop-types';
import { BsFillCalculatorFill } from 'react-icons/bs';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import Button from '../Button';
import s from './ModalMobileHome.module.css';

const options = [
  { value: 'Транспорт', id: 2 },
  { value: 'Продукты', id: 3 },
  { value: 'Здоровье', id: 1 },
];

function ModalExpenenses({ closeModal, category }) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [InputMoney, setinputMoney] = useState('');
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
    <div className={s.modalMobileHome}>
      <HiArrowNarrowLeft
        size={30}
        color="#FF751D"
        style={{ position: 'absolute', top: 22, left: 22 }}
        onClick={closeModal}
      />
      <form className={s.formMobileHome}>
        <input
          className={s.inputMobileHome}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={`${category} description`}
        />

        <select
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
        </select>
        <div className={s.wrappMobileInput}>
          <input
            className={s.transactionMobileInput}
            value={InputMoney}
            onChange={handleInputMoneyChange}
            placeholder="0.00"
          />
          <div className={s.wrappMobileIcon}>
            <BsFillCalculatorFill color="#1D2E4A" size={20} />
          </div>
        </div>
        <ul className={s.listMobileButton}>
          <li className={s.listButtonItem}>
            <Button name="Input" />
          </li>
          <li>
            <Button name="Clear" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ModalExpenenses;

ModalExpenenses.propTypes = {
  closeModal: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired
};
