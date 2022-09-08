import AuthForm from '../../Components/AuthForm';
import Container from '../../Components/Containter';
import styles from './AuthView.module.css';

import imgText from '../../images/svg/Kapusta.svg';

function HomeView() {
  return (
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
  );
}

export default HomeView;
