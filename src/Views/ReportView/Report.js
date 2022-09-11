import s from './Report.module.css';
import CashFlow from '../../Components/CashFlow/CashFlow';
import Categories from '../../Components/Categories/Categories';
import UserReportNav from '../../Components/UserReportNav/UserReportNav';
import ChartReport from '../../Components/ChartReport';

// nav
// cashflow
// libruary

export default function Report() {
  return (
    <>
      <div className={s.PageHomeBackground} />
      <UserReportNav />
      <CashFlow />
      <Categories />
      <ChartReport />
      <div className={s.PageHomeBackgroundImg} />
    </>
  );
}
