import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { clsx } from 'clsx';

export type OnClick = () => void;

type ArrowButtonProps = {
	isActive?: boolean;
	onClick?: OnClick;
};

export const ArrowButton = ({
	isActive = false,
	onClick,
}: ArrowButtonProps) => {
	const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
		if (event.key === 'Enter' && onClick) {
			onClick();
		}
	};

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={onClick}
			onKeyDown={handleKeyDown}
			className={clsx(styles.container, isActive && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isActive && styles.arrow_open)}
			/>
		</div>
	);
};
