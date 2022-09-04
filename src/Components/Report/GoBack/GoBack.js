import { useNavigate } from 'react-router-dom';
import s from './GoBack.module.css';
import goBack from '../../../public/goBack.svg';

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={s.goBack}
      onClick={() => {
        navigate('/');
      }}
    >
      <img className={s.img} src={goBack} alt="goBack" />
      <p className={s.mainPage}>Main page</p>
    </button>
  );
}
