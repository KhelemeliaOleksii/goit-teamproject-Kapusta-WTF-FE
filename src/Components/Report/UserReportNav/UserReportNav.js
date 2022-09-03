import { useState } from 'react';
import s from './UserReportNav.module.css';
import goBack from '../../../public/goBack.svg';
// import Switcher from '../Switcher/Switcher';
import sprite from '../../../public/sprite_categories.svg';

export default function UserReportNav() {
  const mouthes = [
    'грудень',
    'лютий',
    'березень',
    'квітень',
    'травень',
    'червень',
    'липень',
    'серпень',
    'вересень',
    'жовтень',
    'листопад',
    'січень',
  ];
  const [date, setDate] = useState(new Date());

  const changeMonth = (e) => {
    setDate((prevDate) => {
      console.log(prevDate);
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();
      newDate.setMonth(e === 'left' ? month - 1 : month + 1);
      return newDate;
    });
  };
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className={s.container}>
      {/* goBack */}
      <div className={s.goBack}>
        <img className={s.img} src={goBack} alt="goBack" />
        <p className={s.mainPage}>Main page</p>
      </div>
      <div className={s.period}>
        <p className={s.p}>Current period:</p>
        <ul className={s.list}>
          <li>
            <span
              onClick={() => changeMonth('left')}
              onKeyPress={() => changeMonth('left')}
              role="button"
              tabIndex={0}
            >
              <svg width="10" height="15" aria-label="clickLeft">
                <use href={`${sprite}#icon-clickLeft`} />
              </svg>
            </span>
          </li>
          <li>
            <p className={s.p_period}>
              {mouthes[month]} {year}
            </p>
          </li>
          <li>
            <span
              onClick={() => changeMonth('rigth')}
              onKeyPress={() => changeMonth('rigth')}
              role="button"
              tabIndex={0}
            >
              <svg width="10" height="15" aria-label="clickRight">
                <use href={`${sprite}#icon-clickRigth`} />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
