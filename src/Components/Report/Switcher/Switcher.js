import PropTypes from 'prop-types';
import s from './Switcher.module.css';
import sprite from '../../../public/sprite_categories.svg';

export default function Switcher({ month, year, changeMonth }) {
  return (
    <ul className={s.list}>
      <li>
        <a
          href="report"
          onClick={() => {
            changeMonth('left');
          }}
        >
          <svg width="10" height="15" aria-label="clickLeft">
            <use href={`${sprite}#icon-clickLeft`} />
          </svg>
        </a>
      </li>
      <li>
        <p className={s.p}>
          {month} {year}
        </p>
      </li>
      <li>
        <a
          href="report"
          onClick={() => {
            changeMonth('rigth');
          }}
        >
          <svg width="10" height="15" aria-label="clickRight">
            <use href={`${sprite}#icon-clickRigth`} />
          </svg>
        </a>
      </li>
    </ul>
  );
}
Switcher.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  changeMonth: PropTypes.func.isRequired,
};
