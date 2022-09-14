import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import CategoryItem from '../CategoryItem/CategoryItem';
import reportSelectors from '../../redux/report/report-selectors';
import reportOperations from '../../redux/report/report-operations';
import { toggleActiveCategory } from '../../redux/report/report-slice';
import s from './Categories.module.css';

export default function Categories() {
  const dispatch = useDispatch();
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const data = useSelector(reportSelectors.getTransactionType);
  const activeCategoryId = useSelector(reportSelectors.getActiveCategoryId);

  useEffect(() => {
    if (activeCategoryId) {
      dispatch(
        reportOperations.transactionDesc({
          normalizedDate,
          categoryId: activeCategoryId,
        })
      );
    }
  }, [dispatch, normalizedDate, activeCategoryId]);

  const onActiveItemClick = (categoryId) => {
    dispatch(toggleActiveCategory(categoryId));
    dispatch(reportOperations.transactionDesc({ normalizedDate, categoryId }));
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
