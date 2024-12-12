import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isOpened, setIsOpened] = useState(false);

	const handleClick = () => setIsOpened((prevState) => !prevState);

	return (
		<>
			<ArrowButton OnClick={handleClick} isOpened={isOpened} />
			<aside
				className={clsx(styles.container, {
					[styles['container_open']]: isOpened,
				})}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
