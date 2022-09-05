/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserReportNav.module.css';
import GoBack from '../GoBack/GoBack';
import sprite from '../../../public/sprite_categories.svg';
import { dateUser } from '../../../redux/report/report-slice';
import reportOperations from '../../../redux/report/report-operations';
import transactionSelectors from '../../../redux/transaction/transaction-selectors';
import Balance from '../../Balance';
import balanceSelectors from '../../../redux/balance/balance-selectors';

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
      const newDate = new Date(prevDate.getTime());
      const month = newDate.getMonth();
      newDate.setMonth(e === 'left' ? month - 1 : month + 1);
      return newDate;
    });
  };
  const month = date.getMonth();
  const year = date.getFullYear();
  const normalizedDate = date.toISOString().slice(0, 10);
  const type = useSelector(transactionSelectors.getType);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dateUser(normalizedDate));
    dispatch(reportOperations.userMount(normalizedDate));
  }, [date]);
  useEffect(() => {
    dispatch(reportOperations.transactionType({ normalizedDate, type }));
  }, [date, type]);
  const balance = useSelector(balanceSelectors.getBalance);

  return (
    <div className={s.container}>
      <GoBack />
      <Balance balanceValue={balance} />
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
              {mouthes[month]} {year}
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
    </div>
  );
}
