/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';
import expensesOptions from './expenses.json';
import incomeOptions from './income.json';
import { ReactComponent as Select } from '../../images/svg/select.svg';
import s from './Dropdown.module.css';

function Dropdown({ category, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState('');
  const options = category === 'expenses' ? expensesOptions : incomeOptions;
  
  return (
    <div className={s.dropdown}>
      <div tabIndex='0' onClick={() => setIsActive(!isActive)} className={s.dropdown__title}>
         {!selected && category === 'expenses' ? 'Категорія товару' : !selected && category === 'income' ? 'Категорія доходу' : option}
      </div>
      {isActive && (
        <div className={s.dropdown__list}>
            {options.map((option) => (
                <div key={option.id} onClick={() => {
                    setSelected(option.id);
                    setOption(option.value);
                    setIsActive(false);
                    }} className={s.dropdown__item}>
                    {option.value}
                </div>
            ))}
        </div>
        )}
        <Select
          color="#1D2E4A"
          size={10}
          style={{ position: 'absolute', right: 20, top: 18 }}
        />
    </div>
)}

Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired
};

export default Dropdown;