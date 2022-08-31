import s from './Categories.module.css';
import Switcher from '../Switcher/Switcher';
import CategoryItem from '../CategoryItem/CategoryItem';

const data = [
  {
    id: 2,
    amount: 1000,
    category: 'transport',
    isActive: true,
    types: [{ amount: 100, description: 'taxi' }],
  },
  {
    id: 3,
    amount: 1000,
    category: 'transport',
    isActive: false,
    types: [{ amount: 100, description: 'taxi' }],
  },
  {
    id: 4,
    amount: 1000,
    category: 'transport',
    isActive: true,
    types: [{ amount: 100, description: 'taxi' }],
  },
];

export default function Categories() {
  return (
    <div className={s.container}>
      <Switcher title="EXPENSES" />
      <ul className={s.categories}>
        {data.map((item) => (
          <CategoryItem
            amount={item.amount}
            key={item.id}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
