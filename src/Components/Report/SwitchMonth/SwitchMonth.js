/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './SwitchMonth.module.css';
import sprite from '../../../public/sprite_categories.svg';
import { dateUser } from '../../../redux/report/report-slice';
import reportOperations from '../../../redux/report/report-operations';
import monthes from './month';

export default function SwitchMonth() {
  // const monthes = [
  //   'грудень',
  //   'лютий',
  //   'березень',
  //   'квітень',
  //   'травень',
  //   'червень',
  //   'липень',
  //   'серпень',
  //   'вересень',
  //   'жовтень',
  //   'листопад',
  //   'січень',
  // ];
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const changeMonth = (e) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();
      newDate.setMonth(e === 'left' ? month - 1 : month + 1);
      return newDate;
    });
  };
  const month = date.getMonth();
  const year = date.getFullYear();
  const normalizedDate = date.toISOString().slice(0, 10);
  useEffect(() => {
    dispatch(dateUser(normalizedDate));
    dispatch(reportOperations.userMount(normalizedDate));
  }, [date]);

  return (
    <div className={s.period}>
      <p className={s.p}>Поточний період:</p>
      <ul className={s.list}>
        <li>
          <span
            className={s.span}
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
            {monthes[month]} {year}
          </p>
        </li>
        <li>
          <span
            className={s.span}
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
  );
}
