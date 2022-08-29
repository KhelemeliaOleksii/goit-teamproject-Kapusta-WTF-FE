import s from './Categories.module.css';
import sprite from '../../../public/sprite_categories.svg';

// const obj = {
//   EXPENSES,
// };

export default function Categories() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <a href="report">
            <svg width="10" height="15" aria-label="clickLeft">
              <use href={`${sprite}#icon-clickLeft`} />
            </svg>
          </a>
        </li>
        <li>
          <p className={s.titleExpenses}>EXPENSES</p>
        </li>
        <li>
          <a href="report">
            <svg width="10" height="15" aria-label="clickRight">
              <use href={`${sprite}#icon-clickRigth`} />
            </svg>
          </a>
        </li>
      </ul>
      <ul className={s.categories}>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
        <li className={s.categoriesItem}>
          <span>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-products`} />
            </svg>
          </div>
          <h3>PRODUCTS</h3>
        </li>
      </ul>
    </div>
  );
}
