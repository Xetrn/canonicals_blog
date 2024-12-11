import styles from './ArrowButton.module.scss';

import clsx from 'clsx';

import arrow from 'src/images/arrow.svg';

type ArrowButtonProps = {
	isOpened: boolean;
	onClick?: () => void;
};

export const ArrowButton = ({ isOpened, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(styles.container, isOpened ? styles.container_open : '')}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpened ? styles.arrow_open : '')}
			/>
		</div>
	);
};
