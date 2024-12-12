import arrow from '../../images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

export type TArrowButton = {
	OnClick: () => void;
	isOpen: boolean;
};

export const ArrowButton = (props: TArrowButton) => {
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			props.OnClick();
		}
	};

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: props.isOpen,
			})}
			onClick={props.OnClick}
			onKeyDown={handleKeyDown}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: props.isOpen })}
			/>
		</div>
	);
};
