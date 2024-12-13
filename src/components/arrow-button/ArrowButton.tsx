import clsx from 'clsx';
import arrow from '../../images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	isOpen?: boolean;
	onClick?: OnClick;
};

export const ArrowButton = ({ isOpen = false, onClick }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<button
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			className={clsx(styles.container, isOpen && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen && styles.arrow_open)}
			/>
		</button>
	);
};
