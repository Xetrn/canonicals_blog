import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [openForm, setOpenForm] = useState(true);
	const handleClick = () => setOpenForm((prevState) => !prevState);
	return (
		<>
			<ArrowButton OnClick={handleClick} openForm={openForm} />
			<aside
				className={clsx(styles.container, {
					[styles['container_open']]: openForm,
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
