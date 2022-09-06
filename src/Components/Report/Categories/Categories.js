/* eslint-disable no-underscore-dangle */
import { useSelector } from 'react-redux';
import s from './Categories.module.css';
import UserTypeAmount from '../UserTypeAmount/UserTypeAmount';
import categoriesFilter from './categories.json';
import CategoryItem from '../CategoryItem/CategoryItem';

export default function Categories() {
  const data = useSelector((state) => state.reportReducer.transaction);
  const dataItem = data.map((item) => {
    const category = categoriesFilter.find(
      (filter) => filter._id.$oid === item._id
    );
    return { ...category, ...item };
  });

  return (
    <div className={s.container}>
      <UserTypeAmount />
      <ul className={s.categories}>
        {dataItem.map((item) => (
          <CategoryItem
            totalAmount={item.totalAmount}
            key={item._id}
            categoryName={item.categoryName}
          />
        ))}
      </ul>
    </div>
  );
}
