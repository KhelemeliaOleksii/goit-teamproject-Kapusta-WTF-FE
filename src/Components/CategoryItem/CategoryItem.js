import PropTypes from 'prop-types';
import sprite from '../../images/svg/sprite_categories.svg';
import s from './CategoryItem.module.css';

export default function CategoryItem({
  totalAmount,
  categoryName,
  categoryId,
  onActiveItemClick,
  activeStyle,
}) {
  return (
    <li
      className={s.categoriesItem}
      onClick={() => onActiveItemClick(categoryId)}
      aria-hidden="true"
    >
      <span className={s.span}>{totalAmount}</span>
      <div className={[s[activeStyle]]}>
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
  activeStyle: PropTypes.string.isRequired,
};
