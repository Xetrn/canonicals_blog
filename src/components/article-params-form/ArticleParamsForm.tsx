import { FormEvent, useRef, useState } from 'react';
import { useFormClose } from './useFormClose';

import { ArrowButton } from '../arrow-button';
import { Button } from '../button';

import styles from './ArticleParamsForm.module.scss';

import clsx from 'clsx';

import { Text } from '../text';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';

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

export const ArticleParamsForm = ({
	setStyle,
}: {
	setStyle: (settings: ArticleStateType) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const ref = useRef<HTMLDivElement | null>(null);

	const {
		fontFamilyOption,
		fontColor,
		backgroundColor,
		contentWidth,
		fontSizeOption,
	} = formState;

	useFormClose({ open: isOpen, ref, onClose: () => setIsOpen((s) => !s) });

	const updateStateField = (
		field: keyof ArticleStateType,
		value: OptionType
	) => {
		setFormState((s) => ({ ...s, [field]: value }));
	};

	const handleFormReset = (e: FormEvent) => {
		e.preventDefault();
		setFormState(defaultArticleState);
		setStyle(defaultArticleState);
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		setStyle(formState);
		setIsOpen((s) => !s);
	};

	return (
		<div ref={ref}>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen((s) => !s)} />
			<aside
				className={clsx(styles.container, isOpen ? styles.container_open : '')}>
				<form
					className={styles.form}
					onReset={handleFormReset}
					onSubmit={handleFormSubmit}>
					<Text as='p' size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected: OptionType) =>
							updateStateField('fontFamilyOption', selected)
						}
						title='Шрифт'></Select>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={(selected: OptionType) =>
							updateStateField('fontSizeOption', selected)
						}
						title='Размер шрифта'></RadioGroup>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={(selected: OptionType) =>
							updateStateField('fontColor', selected)
						}
						title='Цвет шрифта'></Select>
					<Separator></Separator>
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={(selected: OptionType) =>
							updateStateField('backgroundColor', selected)
						}
						title='Цвет фона'></Select>
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={(selected: OptionType) =>
							updateStateField('contentWidth', selected)
						}
						title='Ширина контента'></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
