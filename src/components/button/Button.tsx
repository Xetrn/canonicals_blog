import { Text } from '../text';
import styles from './Button.module.scss';

interface ButtonProps {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	ariaLabel?: string;
}

export const Button = ({
	title,
	onClick,
	type = 'button',
	ariaLabel,
}: ButtonProps) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={onClick}
			aria-label={ariaLabel}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
