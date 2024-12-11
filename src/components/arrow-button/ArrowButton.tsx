import clsx from 'clsx';
import type { FC } from 'react';

import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export interface ArrowButtonProps {
	onClick?: OnClick;
	isOpened?: boolean;
}

export const ArrowButton: FC<ArrowButtonProps> = ({ onClick, isOpened }) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(styles.container, isOpened && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpened && styles.arrow_open)}
			/>
		</div>
	);
};
