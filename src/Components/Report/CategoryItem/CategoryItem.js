import PropTypes from 'prop-types';
import s from './CategoryItem.module.css';
import sprite from '../../../public/sprite_categories.svg';

export default function CategoryItem({ totalAmount, categoryName }) {
  return (
    <li className={s.categoriesItem}>
      <span className={s.span}>{totalAmount}</span>
      <div className={s.background}>
        <svg className={s.svg} width="63" height="56" aria-label="clickLeft">
          <use href={`${sprite}#icon-${categoryName || 'default'}`} />
        </svg>
      </div>
      <h3 className={s.categoryName}>{categoryName || 'no name'}</h3>
    </li>
  );
}

CategoryItem.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
};
