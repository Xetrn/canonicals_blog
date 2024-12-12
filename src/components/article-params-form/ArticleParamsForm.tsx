import { FormEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

// Components
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import { Text } from '../text';
import { Select } from '../select';

// Constants
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';

// Styles
import styles from './ArticleParamsForm.module.scss';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type TArticleParamsForm = {
	setAppOptions: (value: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: TArticleParamsForm) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const asideRef = useRef<HTMLFormElement | null>(null);

	const onMenuOpenClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const onClickOutsideForm = (event: MouseEvent) => {
			if (asideRef.current && event.target instanceof Node) {
				if (!asideRef.current.contains(event.target) && isMenuOpen) {
					setIsMenuOpen(false);
				}
			}
		};
		if (isMenuOpen) {
			window.addEventListener('mousedown', onClickOutsideForm);
		} else {
			window.removeEventListener('mousedown', onClickOutsideForm);
		}

		return () => {
			window.removeEventListener('mousedown', onClickOutsideForm);
		};
	}, [isMenuOpen]);

	const [formOptions, setFormOptions] = useState(defaultArticleState);

	const changeFormOption = (
		property: keyof typeof defaultArticleState,
		selected: OptionType
	) => {
		setFormOptions((prev) => ({ ...prev, [property]: selected }));
	};

	const onReset = () => {
		setFormOptions(defaultArticleState);
		props.setAppOptions(defaultArticleState);
	};

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log('сабмит??', event);
		props.setAppOptions(formOptions);
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} OnClick={onMenuOpenClick} />

			<aside
				ref={asideRef}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={onSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={formOptions.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={(value) =>
							changeFormOption('fontFamilyOption', value)
						}></Select>
					<RadioGroup
						name='font size'
						options={fontSizeOptions}
						selected={formOptions.fontSizeOption}
						title='Размер шрифта'
						onChange={(value) =>
							changeFormOption('fontSizeOption', value)
						}></RadioGroup>
					<Select
						selected={formOptions.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(value) => changeFormOption('fontColor', value)}></Select>
					<Separator />
					<Select
						selected={formOptions.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(value) =>
							changeFormOption('backgroundColor', value)
						}></Select>
					<Select
						selected={formOptions.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(value) =>
							changeFormOption('contentWidth', value)
						}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={onReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
