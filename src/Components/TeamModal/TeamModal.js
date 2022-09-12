import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import TeamItems from './TeamItems.json';
import s from './TeamModal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function TeamModal({ closeModal }) {
  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div
      tabIndex="0"
      className={s.overlay}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayClick}
      role="button"
    >
      <div className={s.modal__team}>
        <button type="button" className={s.close__btn} onClick={() => closeModal()}>
          <img className={s.close__icon} alt="close" src="https://raw.githubusercontent.com/KhelemeliaOleksii/goit-teamproject-Kapusta-WTF-FE/e6710f7449b3da1aba98736498ad209cdb3db401/src/images/svg/close.svg" width="30" height="30" />
        </button>
        <ul className={s.team}>
          {TeamItems.map(({
            image, firstName, secondName, position, responsibilities, github, linkedin, telegram
          }) => (
            <li className={s.item} key={secondName}>
              <img className={s.image} src={image} alt={secondName} key={secondName} width="300" loading="lazy" />
              <div className={s.content}>
                <h3 lang="en" className={s.title}>{firstName} <br />{secondName}</h3>
                <p lang="en" className={s.subtitle}>{position}</p>
                <p lang="en" className={s.description}>{responsibilities}</p>
                <ul className={s.socials}>
                  {position.includes('Developer') && (
                  <li className={s.socials__item}>
                    <a href={github} className={s.socials__link}>
                      <img className={s.socials__icon} alt={github} src="https://raw.githubusercontent.com/KhelemeliaOleksii/goit-teamproject-Kapusta-WTF-FE/develop/src/images/team/github.png" width="25" height="25" />
                    </a>
                  </li>
                  )}
                  <li className={s.socials__item}>
                    <a href={linkedin} className={s.socials__link}>
                      <img className={s.socials__icon} alt={linkedin} src="https://raw.githubusercontent.com/KhelemeliaOleksii/goit-teamproject-Kapusta-WTF-FE/develop/src/images/team/linkedin.png" width="25" height="25" />
                    </a>
                  </li>
                  <li className={s.socials__item}>
                    <a href={linkedin} className={s.socials__link}>
                      <img className={s.socials__icon} alt={telegram} src="https://raw.githubusercontent.com/KhelemeliaOleksii/goit-teamproject-Kapusta-WTF-FE/develop/src/images/team/telegram.png" width="25" height="25" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    modalRoot
  );
}

TeamModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};
