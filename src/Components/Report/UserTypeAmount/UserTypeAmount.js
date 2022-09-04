// import PropTypes from 'prop-types';
import s from './UserTypeAmount.module.css';
import sprite from '../../../public/sprite_categories.svg';

export default function UserTypeAmount() {
  return (
    <ul className={s.list}>
      <li>
        <a href="report">
          <svg width="10" height="15" aria-label="clickLeft">
            <use href={`${sprite}#icon-clickLeft`} />
          </svg>
        </a>
      </li>
      <li>
        <p className={s.p}>Type</p>
      </li>
      <li>
        <a href="report">
          <svg width="10" height="15" aria-label="clickRight">
            <use href={`${sprite}#icon-clickRigth`} />
          </svg>
        </a>
      </li>
    </ul>
  );
}
// UserTypeAmount.propTypes = {
//   title: PropTypes.string.isRequired,
// };
