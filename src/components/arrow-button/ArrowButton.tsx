import styles from './ArrowButton.module.scss';

import clsx from 'clsx';

import arrow from 'src/images/arrow.svg';

type ArrowProps = {
  isOpened: boolean;
  onClick?: () => void;
};

export const ArrowButton = ({ isOpened, onClick }: ArrowProps) => {
  return (
    <div
      role="button"
      aria-label="Открыть/Закрыть форму параметров статьи"
      tabIndex={0}
      onClick={onClick}
      className={clsx(styles.container, { [styles.container_open]: isOpened })}
    >
      <img
        src={arrow}
        alt="иконка стрелочки"
        className={clsx(styles.arrow, { [styles.arrow_open]: isOpened })}
      />
    </div>
  );
};
