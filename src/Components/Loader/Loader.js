import { Rings } from 'react-loader-spinner';

import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <Rings height="300" width="300" color="#FF751D" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
