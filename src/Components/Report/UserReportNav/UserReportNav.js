/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserReportNav.module.css';
import GoBack from '../GoBack/GoBack';
import reportOperations from '../../../redux/report/report-operations';
import transactionSelectors from '../../../redux/transaction/transaction-selectors';
import transactionOperations from '../../../redux/transaction/transaction-operations';
import Balance from '../../Balance';
// import balanceSelectors from '../../../redux/balance/balance-selectors';
import SwitchMonth from '../SwitchMonth/SwitchMonth';
import useWindowDimensions from '../../Hooks';

export default function UserReportNav() {
  const viewPort = useWindowDimensions();

  const type = useSelector(transactionSelectors.getType);
  const normalizedDate = useSelector((state) => state.reportReducer.date);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionOperations.getBalance());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reportOperations.transactionType({ normalizedDate, type }));
  }, [normalizedDate, type]);
  const balance = useSelector((state) => state.transaction.balance);

  return (
    <div className={s.container}>
      {viewPort.width < 768 && (
        <>
          <GoBack />
          <SwitchMonth />
          <Balance balanceValue={balance} />
        </>
      )}
      {viewPort.width >= 768 && (
        <>
          <GoBack />
          <Balance balanceValue={balance} />
          <SwitchMonth />
        </>
      )}
    </div>
  );
}
