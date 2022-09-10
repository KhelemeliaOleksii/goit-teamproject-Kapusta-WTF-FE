// import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthForm from '../../Components/AuthForm';
import Container from '../../Components/Containter';
import { googleLogIn } from '../../redux/auth/auth-slice';
import styles from './AuthView.module.css';
import imgText from '../../images/svg/Kapusta.svg';

function HomeView() {
  const dispatch = useDispatch();
  const [isGoogleLogined, setIsGoogleLogined] = useState(false);
  const [searchParams] = useSearchParams();
  const googleToken = searchParams.get('token');
  // const username = searchParams.get('username');
  useEffect(() => {
    if (googleToken && !isGoogleLogined) {
      dispatch(googleLogIn(googleToken));
      setIsGoogleLogined(true);
    }
  }, [dispatch, googleToken, isGoogleLogined]);

  console.log('isGoogleLogined', isGoogleLogined);
  // console.log('username', username);

  // if (isGoogleLogined) {
  //   setIsGoogleLogined(false);
  // }

  return (
    <>
      {isGoogleLogined ? (
        <Navigate replace to="/" />
      )
        : (
          <section className={styles.section}>
            <div className={styles.authBackground} />
            <Container>
              <div className={styles.mainWrapper}>
                <div className={styles.textWrapper}>
                  <img className={styles.kapusta} src={imgText} alt="Kapusta" />
                  <h1 className={styles.title}>smart finance</h1>
                </div>
                <div className={styles.loginWrapper}>
                  <AuthForm />
                </div>
              </div>
            </Container>
          </section>

        )}
    </>
  );
}

export default HomeView;
