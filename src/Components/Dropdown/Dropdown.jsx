import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import expensesOptions from './expenses.json';
import incomeOptions from './income.json';
import { ReactComponent as Up } from '../../images/svg/up.svg';
import { ReactComponent as Down } from '../../images/svg/down.svg';
import s from './Dropdown.module.css';

function Dropdown({ category, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [option, setOption] = useState('');
  const options = category === 'expenses' ? expensesOptions : incomeOptions;

  const ref = useRef();

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsActive(false);
        setClicked(0);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
  }, [ref]);

  return (
    <div className={s.dropdown} ref={ref}>
      <div
        tabIndex="0"
        onClick={() => {
          if (clicked === 0) {
            setIsActive(true);
            setClicked(1);
          } if (clicked === 1) {
            setIsActive(false);
            setClicked(0);
          }
        }}
        onKeyDown={() => {
          if (clicked === 0) {
            setIsActive(true);
            setClicked(1);
          } if (clicked === 1) {
            setIsActive(false);
            setClicked(0);
          }
        }}
        role="button"
        className={s.dropdown__title}
      >
        {!selected && category === 'expenses' && 'Категорія товару'}
        {!selected && category === 'income' ? 'Категорія доходу' : option}
      </div>
      {isActive && (
        <div
          className={s.dropdown__list}
        >
          {options.map((item) => (
            <div
              tabIndex="0"
              key={item.id}
              onClick={() => {
                setSelected(item.id);
                setOption(item.value);
                setIsActive(false);
                setClicked(0);
              }}
              onKeyDown={() => {
                setSelected(item.id);
                setOption(item.value);
                setIsActive(false);
                setClicked(0);
              }}
              role="button"
              className={s.dropdown__item}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
      {isActive
        ? (
          <Up
            color="#1D2E4A"
            size={10}
            style={{ position: 'absolute', right: 13, top: 18 }}
          />
        )
        : (
          <Down
            color="#1D2E4A"
            size={10}
            style={{ position: 'absolute', right: 13, top: 18 }}
          />
        )}
    </div>
  );
}

Dropdown.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired
};

export default Dropdown;
