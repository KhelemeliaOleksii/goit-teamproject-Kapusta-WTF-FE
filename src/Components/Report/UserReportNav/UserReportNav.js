import s from './UserReportNav.module.css';
import goBack from '../../../public/goBack.svg';
import Switcher from '../Switcher/Switcher';

export default function UserReportNav() {
  return (
    <div className={s.container}>
      <div className={s.goBack}>
        <img className={s.img} src={goBack} alt="goBack" />
        <p className={s.mainPage}>Main page</p>
      </div>
      <div className={s.period}>
        <p className={s.p}>Current period:</p>
        <Switcher title="November 2019" />
      </div>
    </div>
  );
}
