// import s from './Report.module.css';
import CashFlow from './CashFlow/CashFlow';
import Categories from './Categories/Categories';
import UserReportNav from './UserReportNav/UserReportNav';

export default function Report() {
  return (
    <>
      <UserReportNav />
      <CashFlow />
      <Categories />
    </>
  );
}
