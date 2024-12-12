import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface ArrowButtonProps {
	onClick: () => void;
	openForm: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, openForm }) => {
	return (
		<div
			role="button"
			aria-label="Открыть/Закрыть форму параметров статьи"
			tabIndex={0}
			className={`${styles.container} ${openForm ? styles.container_open : ''}`}
			onClick={() => onClick()}
		>
		<img
			src={arrow}
		  	alt="иконка стрелочки"
		  	className={`${styles.arrow} ${openForm ? styles.arrow_open : ''}`}
		/>
	  	</div>
	);
};