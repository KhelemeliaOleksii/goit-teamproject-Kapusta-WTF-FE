import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

function Modal({
  modalTitle = 'Ви впевнені, що хочете вийти?',
  handleClickYes,
  handleClickNo,
  onClose,
}) {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    window.addEventListener("keydown", handleKeyDown);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.document.body.style.overflowY = "visible";
    };
  });

  return createPortal(
    <div
      className={styles.modalWrapper}
      onClick={handleOverlayClick}
      aria-hidden="true"
    >
      <div className={styles.modalContainer}>
        <span
          className={styles.closeButton}
          onClick={onClose}
          aria-hidden="true"
        >
          &#10006;
        </span>

        <div className={styles.title}>
          <p>{ modalTitle }</p>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.buttonStyles}
            onClick={handleClickYes}
          >
            ТАК
          </button>
          <button
            type="button"
            className={styles.buttonStyles}
            onClick={handleClickNo}
          >
            НІ
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
