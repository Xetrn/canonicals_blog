import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Spacing } from '../spacing';
import { Text } from '../text';
import { Separator } from '../separator';

export type ArticleFormParams = {
	isOpened: boolean,
	setIsOpened: React.Dispatch<SetStateAction<boolean>>,
	setArticleState: React.Dispatch<SetStateAction<ArticleStateType>>
};

export const ArticleParamsForm = ({isOpened, setIsOpened, setArticleState}: ArticleFormParams) => {

	const onArrowButtonClick = () => {
		setIsOpened(!isOpened);
	}

	const [currentArticleState, setParamsArticleState] = useState<ArticleStateType>({...defaultArticleState});


	const updateArticleState = (propName: string, value: OptionType) => {
		setParamsArticleState({...currentArticleState, [propName]: value})
	}

	const resetArticleState = () => {
		setParamsArticleState({...defaultArticleState});
		setArticleState({...defaultArticleState});
	}

	const applyArticleState = () => {
		setArticleState({...currentArticleState})
	}

	return (
		<>
			<ArrowButton isOpened={isOpened} onClick={onArrowButtonClick}/>
			<aside
				className={`${styles.container} ${isOpened ? styles.container_open : ""}`}>
				<form onSubmit={(e: FormEvent) => e.preventDefault()} className={styles.form}>
					<Text family='open-sans'
					weight={800}
					size={31}
					uppercase>Задайте параметры</Text>

					<Spacing size={50}/>

					<Select
					title='Шрифт'
					options={fontFamilyOptions}
					selected={currentArticleState.fontFamilyOption}
					onChange={(selected: OptionType) => updateArticleState("fontFamilyOption", selected)}/>

					<Spacing size={50}/>

					<RadioGroup name='size'
					title='Размер шрифта'
					options={fontSizeOptions}
					selected={currentArticleState.fontSizeOption}
					onChange={(selected: OptionType) => updateArticleState("fontSizeOption", selected)}/>

					<Spacing size={50}/>

					<Select
					title='Цвет шрифта'
					options={fontColors}
					selected={currentArticleState.fontColor}
					onChange={(selected: OptionType) => updateArticleState("fontColor", selected)}/>

					<Spacing size={50}/>
					<Separator/>
					<Spacing size={50}/>

					<Select
					title='Цвет фона'
					options={backgroundColors}
					selected={currentArticleState.backgroundColor}
					onChange={(selected: OptionType) => updateArticleState("backgroundColor", selected)}/>

					<Spacing size={50}/>

					<Select
					title='Ширина контента'
					options={contentWidthArr}
					selected={currentArticleState.contentWidth}
					onChange={(selected: OptionType) => updateArticleState("contentWidth", selected)}/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={resetArticleState}
						/>
						<Button title='Применить' type='submit' onClick={applyArticleState}/>
					</div>
				</form>
			</aside>
		</>
	);
};
