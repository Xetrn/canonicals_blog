import { ArrowButton } from '../arrow-button';
import { Button } from '../button';

import styles from './ArticleParamsForm.module.scss';
import { FC, FormEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Text } from '../text';
import { Select } from '../select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from '../../constants/articleProps';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';

type Props = {
	setSettings: (value: ArticleStateType) => void;
};

export const ArticleParamsForm: FC<Props> = ({ setSettings }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [fontFamily, setFontFamily] = useState<OptionType>(fontFamilyOptions[0]);
	const [fontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState<OptionType>(fontColors[0]);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColors[0]);
	const [contentWidth, setContentWidth] = useState<OptionType>(contentWidthArr[0]);

	const toggleSidebar = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const resetSettings: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		setSettings(defaultArticleState);
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
	};

	const applySettings: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		setSettings({
			fontFamilyOption: fontFamily,
			fontSizeOption: fontSize,
			fontColor: fontColor,
			contentWidth: contentWidth,
			backgroundColor: backgroundColor,
		});
	};

	const handleClickOutside = useCallback((event: MouseEvent) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef, handleClickOutside]);

	return (
		<>
			<ArrowButton onClick={toggleSidebar} isOpen={isOpen} />
			<aside className={clsx(styles.container, isOpen && styles.container_open)} ref={wrapperRef}>
				<form className={styles.form} onSubmit={applySettings} onReset={resetSettings}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>

					<Select title='Шрифт' options={fontFamilyOptions} selected={fontFamily} onChange={setFontFamily} />

					<RadioGroup
						name='fontSize'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={fontSize}
						onChange={setFontSize}
					/>

					<Select title='Цвет шрифт' options={fontColors} selected={fontColor} onChange={setFontColor} />

					<Separator />

					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={backgroundColor}
						onChange={setBackgroundColor}
					/>

					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={contentWidth}
						onChange={setContentWidth}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
