import s from './BalanceModal.module.css';

function BalanceModal() {
  return (
    <div className={s.modalContainer}>
      <p className={s.modalText}> Щоб почати роботу, введіть ваш поточний баланс.</p>
      <p className={s.modalSecondText}>
        Ви не можете витрачати гроші поки у вас їх немає :)
      </p>
    </div>
  );
}
export default BalanceModal;
