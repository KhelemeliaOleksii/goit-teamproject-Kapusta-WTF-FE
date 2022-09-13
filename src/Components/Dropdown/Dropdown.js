import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import categories from '../../redux/categories/categories-operations';
import { ReactComponent as Up } from '../../images/svg/up.svg';
import { ReactComponent as Down } from '../../images/svg/down.svg';
import s from './Dropdown.module.css';

export default function Dropdown({ category, selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);

  const ref = useRef();

  useEffect(() => {
    const onClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setIsActive(false);
        setClicked(0);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    const getOptionsByType = async () => {
      const items = await categories.getCategories();
      const itemsByType = await items.filter((item) => item.categoryType === category);
      setOptions(itemsByType);
    };
    getOptionsByType();
  }, [ref, category]);

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
        className={selected ? s.dropdown__title__selected : s.dropdown__title}
      >
        {!selected && category === 'expenses' && 'Категорія товару'}
        {!selected && category === 'income' && 'Категорія доходу'}
        {selected && option}
      </div>
      {isActive && (
        <div
          className={s.dropdown__list}
        >
          {options.map(({ _id, categoryName }) => (
            <div
              tabIndex="0"
              key={_id}
              onClick={() => {
                setSelected(_id);
                setOption(categoryName);
                setIsActive(false);
                setClicked(0);
              }}
              onKeyDown={() => {
                setSelected(_id);
                setOption(categoryName);
                setIsActive(false);
                setClicked(0);
              }}
              role="button"
              className={s.dropdown__item}
            >
              {categoryName}
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
  setSelected: PropTypes.func.isRequired,
};
