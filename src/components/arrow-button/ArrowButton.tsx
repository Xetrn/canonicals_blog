import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';
import arrow from '@images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = (onClick: MouseEventHandler) => void;

export const ArrowButton: FC<{
	onClick: MouseEventHandler;
	isOpen: boolean;
}> = ({ onClick, isOpen }) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: isOpen })}
			onMouseDown={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};
