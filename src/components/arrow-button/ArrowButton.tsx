import clsx from 'clsx';
import arrow from '../../images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface ArrowButtonProps {
	isOpen: boolean;
	onClick: OnClick;
}

export const ArrowButton = ({ isOpen, onClick }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={onClick}
			onKeyDown={(e) => e.key === 'Enter' && onClick()}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
