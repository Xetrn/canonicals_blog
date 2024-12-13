import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { Select } from '../select';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';

interface ArticleSetter {
	setArticleState: (state: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ setArticleState }: ArticleSetter  ) => {
	const [isOpened, setIsOpened] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);
	const formRef = useRef<HTMLDivElement | null>(null);
	
	const handleClick = () => setIsOpened((prevState) => !prevState);

	const setDefaultState = () => {
		setFormState(defaultArticleState);
		setArticleState(defaultArticleState);
	};

	const updateFormState = (
		value: string,
		field: keyof ArticleStateType,
		options: OptionType[]
	) => {
		const requiredObject = options.find((obj) => obj.value === value);
		setFormState((prev) => ({ ...prev, [field]: requiredObject }));
	}

	const applyFormState = (evt: SyntheticEvent) => {
		evt.preventDefault();
		setArticleState(formState);
	}

	const handleOutsideClick = (event: MouseEvent) => {
		if (formRef.current && !formRef.current.contains(event.target as Node)) {
			setIsOpened(false);
		}
	};


	useEffect(() => {
		if (isOpened) {
			document.addEventListener('mousedown', handleOutsideClick);
		} else {
			document.removeEventListener('mousedown', handleOutsideClick);
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpened]);

	return (
		<>
			<ArrowButton OnClick={handleClick} isOpened={isOpened} />
			<aside
				className={clsx(
					styles.container, {
					[styles['container_open']]: isOpened,
				})}>
				<form className={styles.form}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(evt: { value: string; }) => updateFormState(evt.value, 'fontFamilyOption', fontFamilyOptions)}
					/>

					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(evt: { value: string; }) => updateFormState(evt.value, 'fontSizeOption', fontSizeOptions)}
					/>

					<Select
						title='Цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(evt: { value: string; }) => updateFormState(evt.value, 'fontColor', fontColors)}
					/>

					<Select
						title='Цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(evt: { value: string; }) => updateFormState(evt.value, 'backgroundColor', backgroundColors)}
					/>

					<Select
						title='Ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(evt: { value: string; }) => updateFormState(evt.value, 'contentWidth', contentWidthArr)}
					/>

					<div className={styles.bottomContainer}>
						<Button
						title='Сбросить'
						type='reset'
						onClick={setDefaultState}
						/>
						<Button title='Применить'
						type='submit'
						onClick={applyFormState}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
