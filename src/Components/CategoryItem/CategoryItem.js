/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import s from './CategoryItem.module.css';
import sprite from '../../images/svg/sprite_categories.svg';

export default function CategoryItem({
  totalAmount,
  categoryName,
  categoryId,
  onActiveItemClick,
  style,
}) {
  return (
    <li
      className={s.categoriesItem}
      onClick={() => onActiveItemClick(categoryId)}
    >
      <span className={s.span}>{totalAmount}</span>
      <div className={[s[style]]}>
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
  categoryId: PropTypes.string.isRequired,
  onActiveItemClick: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
};
