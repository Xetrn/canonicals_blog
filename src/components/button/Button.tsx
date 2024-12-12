import { Text } from 'components/text';

import styles from './Button.module.scss';
<<<<<<< HEAD
=======
import { SyntheticEvent } from 'react';
>>>>>>> myReadyProject/master

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
<<<<<<< HEAD
	onClick?: () => void;
=======
	onClick?: (e: SyntheticEvent) => void;
>>>>>>> myReadyProject/master
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
