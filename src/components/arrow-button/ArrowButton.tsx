import { FC } from 'react';
import arrow from '../../images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { clsx } from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type Props = {
	onClick?: OnClick;
	isOpen?: boolean;
};

export const ArrowButton: FC<Props> = ({ onClick, isOpen }) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen && styles.container_open)}
			onClick={onClick}
		>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, isOpen && styles.arrow_open)} />
		</div>
	);
};
