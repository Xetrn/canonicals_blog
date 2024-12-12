import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

interface ArrowButtonProps {
  onclick: () => void;
  isFormOpen: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ onclick, isFormOpen }) => {
  return (
    <div
      role="button"
      aria-label="Открыть/Закрыть форму параметров статьи"
      tabIndex={0}
      className={`${styles.container} ${isFormOpen ? styles.container_open : ''}`}
      onClick={() => onclick()}
    >
      <img
        src={arrow}
        alt="иконка стрелочки"
        className={`${styles.arrow} ${isFormOpen ? styles.arrow_open : ''}`}
      />
    </div>
  );
};
