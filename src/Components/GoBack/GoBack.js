import { useNavigate } from 'react-router-dom';
import s from './GoBack.module.css';
import goBack from '../../images/svg/goBack.svg';

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={s.goBack}
      onClick={() => {
        navigate('/home');
      }}
    >
      <img className={s.img} src={goBack} alt="goBack" />
      <p className={s.mainPage}>Головна сторінка</p>
    </button>
  );
}
