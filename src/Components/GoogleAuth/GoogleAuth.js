import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import styles from './GoogleAuth.module.css';

function GoogleAuth() {
  return (
    <a href="https://kapusta-wtf.herokuapp.com/api/v1/users/google" className={styles.buttonGoogle}>
      <GoogleIcon className={styles.googleSvg} />
      Google
    </a>
  );
}

export default GoogleAuth;
