// import s from './Report.module.css';
import CashFlow from './CashFlow/CashFlow';
import Categories from './Categories/Categories';
import UserReportNav from './UserReportNav/UserReportNav';
import Containter from '../Containter';

export default function Report() {
  return (
    <Containter>
      <UserReportNav />
      <CashFlow />
      <Categories />
    </Containter>
  );
}
