import { ReactElement } from 'react';
import { clsx } from 'clsx';

import arrow from '@images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

interface ArrowButtonProps {
	onClick: OnClick;
	isOpen: boolean;
}

export const ArrowButton = ({
	onClick,
	isOpen,
}: ArrowButtonProps): ReactElement => {
	return (
		<button
			aria-label='Открыть/Закрыть форму параметров статьи'
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onClick={onClick}>
			<img
				src={arrow}
				alt='Иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</button>
	);
};
