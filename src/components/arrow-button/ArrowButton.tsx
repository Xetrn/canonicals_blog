import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';
import { FC } from 'react';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
interface ArrowButtonProps {
	OnClick?: OnClick;
	openForm?: boolean;
}
export const ArrowButton: FC<ArrowButtonProps> = ({ OnClick, openForm }) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			onClick={OnClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles['container_open']]: openForm,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles['arrow_open']]: openForm })}
			/>
		</div>
	);
};
