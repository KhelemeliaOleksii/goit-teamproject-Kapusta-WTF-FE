import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from '../../redux/transaction/transaction-selectors';
import { dateUser, resetTransaction } from '../../redux/report/report-slice';
import transactionSlice from '../../redux/transaction/transaction-slice';
import reportOperations from '../../redux/report/report-operations';
import getDate from '../../helpers/getData/getDate';
import monthes from './month';
import sprite from '../../images/svg/sprite_categories.svg';
import s from './SwitchMonth.module.css';

export default function SwitchMonth() {
  const calendarDate = useSelector(transactionSelectors.getDate);
  const { year, month, day } = calendarDate;
  const startDay = getDate(year, month, day);
  const { changeMonth } = transactionSlice.actions;
  const dispatch = useDispatch();
  const handleChangeMonth = (e) => {
    dispatch(resetTransaction());
    const numberMonth = Number(month);
    const changedMonth = e === 'left' ? numberMonth - 1 : numberMonth + 1;
    dispatch(changeMonth(changedMonth.toString()));
  };
  useEffect(() => {
    dispatch(dateUser(startDay));
    dispatch(reportOperations.userMount(startDay));
  }, [dispatch, startDay]);

  return (
    <div className={s.period}>
      <p className={s.p}>Поточний період:</p>
      <ul className={s.list}>
        <li>
          <span
            className={s.span}
            onClick={() => handleChangeMonth('left')}
            onKeyPress={() => handleChangeMonth('left')}
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
            onClick={() => handleChangeMonth('rigth')}
            onKeyPress={() => handleChangeMonth('rigth')}
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
