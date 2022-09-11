// import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthForm from '../../Components/AuthForm';
import Container from '../../Components/Containter';
import { googleLogIn } from '../../redux/auth/auth-slice';
import styles from './AuthView.module.css';
import imgText from '../../images/svg/Kapusta.svg';

function HomeView() {
  const dispatch = useDispatch();
  // const [isLogInWithGoogle, setIsLogInWithGoogle] = useState(false);
  const [searchParams] = useSearchParams();

  const googleToken = searchParams.get('token');
  const token = useSelector(authSelectors.getAuthToken);

  useEffect(() => {
    if (googleToken) {
      dispatch(googleLogIn(googleToken));
    }
  }, [dispatch, googleToken]);
  console.log('token', token);
  console.log('googleToken', googleToken);

  // const username = searchParams.get('username');
  // useEffect(() => {
  //   if (googleToken && isLogInWithGoogle) {
  //     dispatch(googleLogIn(googleToken));
  //   }
  // }, [dispatch, googleToken, isLogInWithGoogle]);

  // console.log('isGoogleLogined', isLogInWithGoogle);
  // console.log('username', username);

  // if (isLogInWithGoogle) {
  //   setIsLogInWithGoogle(false);
  // }

  return (
    <>
      {googleToken ? (
        <Navigate to="/home" />
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
