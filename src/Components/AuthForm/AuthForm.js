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

  const validateEmail = (emailTest) => {
    const re = /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,3}$/;
    return re.test(emailTest);
  };

  const validatePassword = (passwordTest) => {
    const re = /^[0-9a-zA-Z,.!@#$%^&*]{10,20}$/;
    return re.test(passwordTest);
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const changeEmailValue = (event) => {
    setEmail(event.target.value);
    const { name } = event.target;
    switch (name) {
      case 'email':
        if (!validateEmail(email)) {
          setEmailError('Імейл введено некоректно.');
          break;
        }
        setEmailError('');
        break;
      default:
    }
  };

  const changePasswordValue = (event) => {
    setPassword(event.target.value);
    const { name } = event.target;
    switch (name) {
      case 'password':
        if (!validatePassword(password)) {
          setPasswordError('Пароль має містити тільки цифри, літери та знаки (,.!@#$%^&*). Від 10 до 20 символів');
          break;
        }
        setPasswordError('');
        break;
      default:
    }
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
        if (!password) {
          setPasswordError('Це обов’язкове поле.');
          break;
        }
        if (!validatePassword(password)) {
          setPasswordError('Пароль має містити тільки цифри, літери та знаки (,.!@#$%^&*). Від 10 до 20 символів');
          break;
        }
        setPasswordError('');
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
      setPasswordError('Пароль має містити тільки цифри, літери та знаки (,.!@#$%^&*). Від 10 до 20 символів');
    }

    if (!email) {
      setEmailError('Це обов’язкове поле.');
    }

    if (!password) {
      setPasswordError('Це обов’язкове поле.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.logIn({ email: email.toLowerCase(), password }));
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
      setPasswordError('Пароль має містити тільки цифри, літери та знаки (,.!@#$%^&*). Від 10 до 20 символів');
    }

    if (!email) {
      setEmailError('Це обов’язкове поле.');
    }

    if (!password) {
      setPasswordError('Це обов’язкове поле.');
    }

    if (validateEmail(email) && validatePassword(password)) {
      dispatch(authOperations.register({ email: email.toLowerCase(), password }));
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
            title="Електронна пошта може складатися з латинських буквенних та цифрових символів і обов'язкового символу '@'"
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
