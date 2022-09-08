/* eslint-disable react/style-prop-object */
/* eslint-disable no-underscore-dangle */
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import categoriesFilter from './categories.json';
import CategoryItem from '../CategoryItem/CategoryItem';
import reportSelectors from '../../../redux/report/report-selectors';
import reportOperations from '../../../redux/report/report-operations';
import { toggleActiveCategory } from '../../../redux/report/report-slice';

export default function Categories() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const normalizedDate = useSelector(reportSelectors.getReportDate);
  const data = useSelector(reportSelectors.getTransactionType);
  if (data.length === 0) {
    return <div />;
  }
  const dataItem = data.map((item) => {
    const category = categoriesFilter.find(
      (filter) => filter._id.$oid === item._id
    );
    return { ...category, ...item };
  });

  if (isFirstRender.current) {
    // console.log(dataItem[0]._id);
    dispatch(toggleActiveCategory(dataItem[0]._id));
    isFirstRender.current = false;
  }

  const onActiveItemClick = (categoryId) => {
    isFirstRender.current = false;
    setActiveCategoryId(categoryId);
    dispatch(toggleActiveCategory(activeCategoryId));
    dispatch(reportOperations.transactionDesc({ normalizedDate, categoryId }));
  };

  return (
    <div className={s.container}>
      <UserTypeAmount />
      {dataItem.length > 0 ? (
        <ul className={s.categories}>
          {dataItem.map((item) => {
            if (item._id === activeCategoryId) {
              return (
                <CategoryItem
                  totalAmount={item.totalAmount}
                  key={item._id}
                  categoryName={item.categoryName}
                  categoryId={item._id}
                  onActiveItemClick={onActiveItemClick}
                  style="active"
                />
              );
            }

            return (
              <CategoryItem
                totalAmount={item.totalAmount}
                key={item._id}
                categoryName={item.categoryName}
                categoryId={item._id}
                onActiveItemClick={onActiveItemClick}
                style="noActive"
              />
            );
          })}
        </ul>
      ) : (
        <p className={s.p}>У цьому місяці транзакцій не було</p>
      )}
    </div>
  );
}
