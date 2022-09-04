import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import GoogleAuth from '../GoogleAuth';

import styles from './AuthForm.module.css';

function AuthForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const changeEmailValue = (event) => setEmail(event.target.value);
  const changePasswordValue = (event) => setPassword(event.target.value);

  const validateEmail = (emailTest) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(emailTest));
    return re.test(emailTest);
  };

  const validatePassword = (passwordTest) => {
    const re = /^0-9A-Za-z!@#$%^&*.{10,20}$/;
    console.log(re.test(passwordTest));
    return re.test(passwordTest);
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const onBlur = (e) => {
    const { name } = e.target;
    switch (name) {
      case 'email':
        if (!email) {
          setEmailError('Це обов’язкове поле.');
          break;
        }
        if (!validateEmail(email)) {
          setEmailError('Імейл введено некоректно.');
          break;
        }
        setEmailError('');
        break;
      case 'password':
        if (!validatePassword(password)) {
          setPasswordError('Пароль введено некоректно.');
          break;
        }
        if (!password) {
          setPasswordError('Це обов’язкове поле.');
          break;
        }
        break;
      default:
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Імейл введено некоректно.');
    }

    if (!validatePassword(password)) {
      setPasswordError('Пароль введено некоректно.');
    }

    if (!email) {
      setEmailError('Це обов’язкове поле.');
    }

    if (!password) {
      setPasswordError('Це обов’язкове поле.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.logIn({ email, password }));
      console.log('Успіх!!!');
      formReset();
      setEmailError('');
      setPasswordError('');
    }
  };

  const onRegistration = () => {
    if (!validateEmail(email)) {
      setEmailError('Імейл введено некоректно.');
    }

    if (!validatePassword(password)) {
      setPasswordError('Пароль введено некоректно.');
    }

    if (!email) {
      setEmailError('Це обов’язкове поле.');
    }

    if (!password) {
      setPasswordError('Це обов’язкове поле.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.register({ email, password }));
      console.log('Успіх!!!');
      formReset();
      setEmailError('');
      setPasswordError('');
    }
  };

  return (
    <form className={styles.authForm} onSubmit={onSubmit}>
      <p className={styles.authGoogleText}>
        Ви можете ввійти за допомогою вашого Google Account:
      </p>
      <div>
        <GoogleAuth />
      </div>
      <div className={styles.authBlock}>
        <p className={styles.authText}>
          Або увійдіть, використовуючи адресу електронної пошти та пароль, після реєстрації:
        </p>
        <div className={styles.emailBlock}>
          <label htmlFor="AuthForm__email">
            {emailError && <span style={{ color: 'red' }}>*</span>}
            Електронна пошта:
          </label>
          <input
            type="email"
            name="email"
            id="AuthForm__email"
            value={email}
            onBlur={onBlur}
            onChange={changeEmailValue}
            placeholder="your@email.com"
            title="Електронна пошта може складатися з буквенно-цифрових символів і обов'язкового символу '@'"
            required
          />
          <p className={styles.emailError}>{emailError}</p>
        </div>
        <div className={styles.passwordBlock}>
          <label htmlFor="AuthForm__password">
            {passwordError && <span style={{ color: 'red' }}>*</span>}
            Пароль:
          </label>
          <input
            type="password"
            name="password"
            id="AuthForm__password"
            value={password}
            onBlur={onBlur}
            onChange={changePasswordValue}
            placeholder="Password"
            title="Пароль має містити тільки цифри, літери (латиниця, верхній/нижній регітр) та знаки (,.!@#$%^&*). Мінімальна кількість символів у полі – 10 (включно), максимальна кількість символів у полі – 20 (включно)"
            required
          />
          <p className={styles.passwordError}>{passwordError}</p>
        </div>
      </div>
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.loginButton}>
          Логін
        </button>
        <button
          type="button"
          className={styles.registrationButton}
          onClick={onRegistration}
        >
          Реєстрація
        </button>
      </div>
    </form>
  );
}

export default AuthForm;