import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { defaultArticleState, ArticleStateType, fontFamilyOptions, fontSizeOptions, backgroundColors, fontColors, contentWidthArr } from 'src/constants/articleProps';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Text } from 'components/text';
import { Separator } from '../separator';

type ArticleParamsFormProps = {
	onApply: (selectedOption: ArticleStateType) => void;
	isOpen: boolean;
	onToggle: () => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { onApply, isOpen, onToggle } = props;

	const formRef = useRef<HTMLFormElement>(null);
	const [style, setStyle] = useState<ArticleStateType>(defaultArticleState);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && formRef.current && !formRef.current.contains(event.target as Node)) {
				onToggle();
			}	
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	const handleReset = () => {
		setStyle(defaultArticleState);
		onApply(defaultArticleState);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(style);
	};

	return (
		<>
			<ArrowButton onClick={onToggle} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}
				ref={formRef}
			>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
                		Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						selected={style.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => setStyle({...style, fontFamilyOption: option})}
						title='Шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						options={fontSizeOptions}
						selected={style.fontSizeOption}
						onChange={(option) => setStyle({...style, fontSizeOption: option})}
						title='Размер шрифта'
						name='font-size'
					/>
					<Spacing size={50} />
					<Select
						selected={style.fontColor}
						options={fontColors}
						onChange={(option) => setStyle({...style, fontColor: option})}
						title='Цвет шрифта'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						selected={style.backgroundColor}
						options={backgroundColors}
						onChange={(option) => setStyle({...style, backgroundColor: option})}
						title='Цвет фона'
					/>
					<Spacing size={50} />
					<Select
						selected={style.contentWidth}
						options={contentWidthArr}
						onChange={(option) => setStyle({...style, contentWidth: option})}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={handleReset}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
