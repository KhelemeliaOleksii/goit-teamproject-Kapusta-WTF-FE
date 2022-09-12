import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../redux/report/report-slice';
import goBack from '../../images/svg/goBack.svg';
import s from './GoBack.module.css';

export default function GoBack() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandleClick = () => {
    dispatch(reset());
    navigate('/home');
  };
  return (
    <button type="button" className={s.goBack} onClick={onHandleClick}>
      <img className={s.img} src={goBack} alt="goBack" />
      <p className={s.mainPage}>Головна сторінка</p>
    </button>
  );
}
