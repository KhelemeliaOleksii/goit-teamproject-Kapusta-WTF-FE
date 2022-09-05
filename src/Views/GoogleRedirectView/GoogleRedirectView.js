import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleLogIn } from '../../redux/auth/auth-slice';
import { authOperations } from '../../redux/auth';
import Container from '../../Components/Containter';
import imgText from '../../images/svg/Kapusta.svg';

import styles from './GoogleRedirectView.module.css';

function GoogleRedirectView() {
  const dispatch = useDispatch();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  const email = new URLSearchParams(location.search).get('email');
  const name = new URLSearchParams(location.search).get('name');
  authOperations.token.set(token);

  useEffect(() => {
    const newUser = {
      email,
      token,
      name,
    };
    dispatch(googleLogIn(newUser));
  }, [dispatch, email,
    token,
    name,]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <img className={styles.kapusta} src={imgText} alt="Kapusta" />
            <h1 className={styles.title}>smart finance</h1>
          </div>
          <div>
            <h2 className={styles.notice}>Redirecting...</h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GoogleRedirectView;
