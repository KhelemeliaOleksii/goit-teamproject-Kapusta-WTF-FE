/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
import { useSelector, useDispatch } from 'react-redux';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import CategoryItem from '../CategoryItem/CategoryItem';
import reportSelectors from '../../../redux/report/report-selectors';
import reportOperations from '../../../redux/report/report-operations';
// import { transactionIsActive } from '../../../redux/report/report-slice';

export default function Categories() {
  const dispatch = useDispatch();
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const data = useSelector(reportSelectors.getTransactionType);
  const onActiveItemClick = (categoryId) => {
    dispatch(reportOperations.transactionDesc({ normalizedDate, categoryId }));
    // dispatch(transactionIsActive);
  };

  return (
    <div className={s.container}>
      <UserTypeAmount />
      <ul className={s.categories}>
        {data?.length === 0 ? (
          <p className={s.p}>У цьому місяці транзакцій не було</p>
        ) : (
          data?.map((item) => (
            <CategoryItem
              totalAmount={item.totalAmount}
              key={item._id}
              categoryName={item.categoryName}
              categoryId={item._id}
              onActiveItemClick={onActiveItemClick}
              isActive={item.isActive}
            />
          ))
        )}
      </ul>
    </div>
  );
}
