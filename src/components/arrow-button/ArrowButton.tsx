import arrow from '../../images/arrow.svg';
import styles from './ArrowButton.module.scss';	
import clsx from 'clsx';

export type OnClick = () => void;

type ArrowButtonProps = {
	handleClick: OnClick;
	state: boolean;
}

export const ArrowButton = ({ handleClick, state }: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={handleClick}
			className={clsx(styles.container, state && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, state && styles.arrow_open)}
			/>
		</div>
	);
};
