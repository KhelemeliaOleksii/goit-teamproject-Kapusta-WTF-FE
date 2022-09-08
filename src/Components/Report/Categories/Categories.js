/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
import { useSelector, useDispatch } from 'react-redux';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import categoriesFilter from './categories.json';
import CategoryItem from '../CategoryItem/CategoryItem';
import reportSelectors from '../../../redux/report/report-selectors';
import reportOperations from '../../../redux/report/report-operations';

export default function Categories() {
  const dispatch = useDispatch();
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const data = useSelector(reportSelectors.getTransactionType);

  const dataItem = data.map((item) => {
    const category = categoriesFilter.find(
      (filter) => filter._id.$oid === item._id
    );
    return { ...category, ...item, isActive: false };
  });

  const onActiveItemClick = (categoryId) => {
    dispatch(reportOperations.transactionDesc({ normalizedDate, categoryId }));
  };

  return (
    <div className={s.container}>
      <UserTypeAmount />
      <ul className={s.categories}>
        {data?.length === 0 ? (
          <p className={s.p}>У цьому місяці транзакцій не було</p>
        ) : (
          dataItem?.map((item) => (
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
