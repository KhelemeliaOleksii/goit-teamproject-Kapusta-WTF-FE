import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reportOperations from '../../../redux/report/report-operations';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';

// import CategoryItem from '../CategoryItem/CategoryItem';

export default function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reportOperations.transactionType());
  }, [dispatch]);
  const data = useSelector((state) => state.reportReducer.transaction);
  return (
    <div className={s.container}>
      <UserTypeAmount />
      <ul className={s.categories}>
        {data.map((item) => console.log(item))}
        {/* <CategoryItem
          amount={item.amount}
           ={item.id}
           category={item.category}
           /> */}
      </ul>
    </div>
  );
}
