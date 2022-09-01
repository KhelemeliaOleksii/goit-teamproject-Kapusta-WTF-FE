import { useState } from 'react';
import s from './UserReportNav.module.css';
import goBack from '../../../public/goBack.svg';
import Switcher from '../Switcher/Switcher';

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
  const [date] = useState(new Date());
  const currentMonth = mouthes[date.getUTCMonth()];
  const currentYear = date.getUTCFullYear();
  console.log(typeof currentYear);

  const changeMonth = (e) => {
    e.preventdefault();
    console.log(e);
  };

  return (
    <div className={s.container}>
      <div className={s.goBack}>
        <img className={s.img} src={goBack} alt="goBack" />
        <p className={s.mainPage}>Main page</p>
      </div>
      <div className={s.period}>
        <p className={s.p}>Current period:</p>
        <Switcher
          month={currentMonth}
          year={currentYear}
          changeMonth={changeMonth}
        />
      </div>
    </div>
  );
}
