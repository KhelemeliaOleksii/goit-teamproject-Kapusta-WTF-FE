import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import CategoryItem from '../CategoryItem/CategoryItem';
import reportSelectors from '../../redux/report/report-selectors';
import reportOperations from '../../redux/report/report-operations';
// import { transactionIsActive } from '../../../redux/report/report-slice';
import { toggleActiveCategory } from '../../redux/report/report-slice';

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const dispatch = useDispatch();
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const data = useSelector(reportSelectors.getTransactionType);
  const onActiveItemClick = (categoryId) => {
    dispatch(reportOperations.transactionDesc({ normalizedDate, categoryId }));
    setActiveCategoryId(categoryId);
    dispatch(toggleActiveCategory(activeCategoryId));
  };

  return (
    <div className={s.container}>
      <UserTypeAmount />
      <ul className={s.categories}>
        {data?.length === 0 ? (
          <p className={s.p}>У цьому місяці транзакцій не було</p>
        ) : (
          data?.map(({ _id, totalAmount, categoryName }) => {
            if (_id === activeCategoryId) {
              return (
                <CategoryItem
                  totalAmount={totalAmount}
                  key={_id}
                  categoryName={categoryName}
                  categoryId={_id}
                  onActiveItemClick={onActiveItemClick}
                  activeStyle="active"
                />
              );
            }

            return (
              <CategoryItem
                totalAmount={totalAmount}
                key={_id}
                categoryName={categoryName}
                categoryId={_id}
                onActiveItemClick={onActiveItemClick}
                activeStyle="noActive"
              />
            );
          })
        )}
      </ul>
    </div>
  );
}
