import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

type ArrowProps = {
	isOpen: boolean;
	onClick?: OnClick;
};

export const ArrowButton = ({ isOpen, onClick }: ArrowProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen ? styles.container_open : '')}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen ? styles.arrow_open : '')}
			/>
		</div>
	);
};
