import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useContext, useRef, useState } from 'react';
import { classnames, useOnClickOutside } from 'src/utils';
import { StylesContext } from 'src/index';
import { defaultArticleState, OptionType } from 'src/constants/articleProps';
import { IStyles, IStylesContextValue } from 'src/types/types';
import { FormContent } from '../form-content';

export const ArticleParamsForm = () => {
	const { stylesList, setStylesList } =
		useContext<IStylesContextValue>(StylesContext);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(containerRef, () => setIsOpen(false));

	const handleResetStyles = () => {
		setStylesList(defaultArticleState);
		setInterimStyles(defaultArticleState);
	};

	const handleChangeForm = () => {
		setStylesList(interimStyles);
	};

	const [interimStyles, setInterimStyles] = useState<IStyles>(stylesList);

	const handleChange = (key: keyof IStyles) => (selected: OptionType) => {
		setInterimStyles((prevStyles) => ({
			...prevStyles,
			[key]: selected,
		}));
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={classnames(styles.container, {
					[styles.container_open]: isOpen,
				})}
				ref={containerRef}>
				<form className={styles.form}>
					<FormContent
						interimStyles={interimStyles}
						handleChange={handleChange}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' onClick={handleResetStyles} type='reset' />
						<Button
							title='Применить'
							onClick={handleChangeForm}
							type='button'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
