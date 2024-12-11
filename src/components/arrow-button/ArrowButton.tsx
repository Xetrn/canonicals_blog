import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
type Props = {
	onClick: OnClick;
	isOpen: boolean;
};

export const ArrowButton = (props: Props) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(
				styles.container,
				!props.isOpen ? '' : styles.container_open
			)}
			onClick={props.onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(!props.isOpen ? '' : styles.arrow_open, styles.arrow)}
			/>
		</div>
	);
};
