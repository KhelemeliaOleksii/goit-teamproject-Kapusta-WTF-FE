import s from './Categories.module.css';
import sprite from '../../../public/sprite_categories.svg';
import Switcher from '../Switcher/Switcher';

export default function Categories() {
  return (
    <div className={s.container}>
      <Switcher title="EXPENSES" />
      <ul className={s.categories}>
        <li className={s.categoriesItem}>
          <span className={s.span}>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-transport`} />
            </svg>
          </div>
          <h3>transport</h3>
        </li>
        <li className={s.categoriesItem}>
          <span className={s.span}>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-education`} />
            </svg>
          </div>
          <h3>education</h3>
        </li>
        <li className={s.categoriesItem}>
          <span className={s.span}>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-other`} />
            </svg>
          </div>
          <h3>other</h3>
        </li>
        <li className={s.categoriesItem}>
          <span className={s.span}>1000</span>
          <div className={s.background}>
            <svg
              className={s.svg}
              width="63"
              height="56"
              aria-label="clickLeft"
            >
              <use href={`${sprite}#icon-health`} />
            </svg>
          </div>
          <h3>health</h3>
        </li>
        <li className={s.categoriesItem}>
          <span className={s.span}>1000</span>
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
