import { useState, useRef } from 'react';
import clsx from 'clsx';
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import { Select } from '../select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	OptionType,
	ArticleStateType,
} from '../../constants/articleProps';
import { Spacing } from '../spacing';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormPropsType = {
	onStyleChange: (styles: ArticleStateType) => void;
	selectedStyles: ArticleStateType;
};

export const ArticleParamsForm = (props: ArticleParamsFormPropsType) => {
	const { onStyleChange, selectedStyles } = props;
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const [articleStyles, setArticleStyles] =
		useState<ArticleStateType>(selectedStyles);

	const sidebarRef = useRef<HTMLDivElement>(null);

	const handleChangeStyle = (
		category: keyof typeof defaultArticleState,
		newStyle: OptionType
	) => {
		setArticleStyles((prev) => ({ ...prev, [category]: newStyle }));
	};

	useOutsideClickClose({
		isOpen: isSidebarOpen,
		rootRef: sidebarRef,
		onClose: () => setIsSidebarOpen(false),
		onChange: setIsSidebarOpen,
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onStyleChange(articleStyles);
	};

	const handleReset = () => {
		onStyleChange(defaultArticleState);
		setArticleStyles(defaultArticleState);
	};

	return (
		<>
			<ArrowButton
				onClick={() => setIsSidebarOpen((prev) => !prev)}
				isOpen={isSidebarOpen}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isSidebarOpen,
				})}
				ref={sidebarRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Select
						options={fontFamilyOptions}
						title='Шрифт'
						selected={articleStyles.fontFamilyOption}
						onChange={(value) => handleChangeStyle('fontFamilyOption', value)}
					/>
					<Spacing size={50} />
					<RadioGroup
						options={fontSizeOptions}
						title='Размер шрифта'
						selected={articleStyles.fontSizeOption}
						name='font_size'
						onChange={(value) => handleChangeStyle('fontSizeOption', value)}
					/>
					<Spacing size={50} />
					<Select
						options={fontColors}
						title='Цвет шрифта'
						selected={articleStyles.fontColor}
						onChange={(value) => handleChangeStyle('fontColor', value)}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						options={backgroundColors}
						title='Цвет фона'
						selected={articleStyles.backgroundColor}
						onChange={(value) => handleChangeStyle('backgroundColor', value)}
					/>
					<Spacing size={50} />
					<Select
						options={contentWidthArr}
						title='Ширина контента'
						selected={articleStyles.contentWidth}
						onChange={(value) => handleChangeStyle('contentWidth', value)}
					/>
					<Spacing size={50} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
