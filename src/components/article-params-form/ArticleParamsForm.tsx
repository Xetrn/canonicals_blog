import { FormEvent, useRef, useState } from 'react';
import { useSideBarClose } from 'src/hooks/useSideBarClose';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

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
} from 'src/constants/articleProps';

type ArticleParamsProps = {
	applyParams: (settings: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ applyParams }: ArticleParamsProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const refForm = useRef<HTMLDivElement | null>(null);

	const {
		fontFamilyOption,
		fontColor,
		backgroundColor,
		contentWidth,
		fontSizeOption,
	} = formState;


	const toggleVisible = () => {
		setIsOpen((prev) => !prev);
	};

	useSideBarClose({
		visible: isOpen,
		ref: refForm,
		onClose: toggleVisible,
	});

	const updateStateField = (field: string, value: any) => {
		setFormState((prev) => ({ ...prev, [field]: value }));
	};

	const handleFormReset = (e: FormEvent) => {
		e.preventDefault();
		setFormState(defaultArticleState);
		applyParams(defaultArticleState);
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		applyParams(formState);
		toggleVisible();
	};

	return (
		<div ref={refForm}>
			<ArrowButton isOpen={isOpen} onClick={toggleVisible} />
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
						title='шрифт'></Select>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={(selected: OptionType) =>
							updateStateField('fontSizeOption', selected)
						}
						title='размер шрифта'></RadioGroup>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={(selected: OptionType) =>
							updateStateField('fontColor', selected)
						}
						title='цвет шрифта'></Select>
					<Separator></Separator>
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={(selected: OptionType) =>
							updateStateField('backgroundColor', selected)
						}
						title='цвет фона'></Select>
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={(selected: OptionType) =>
							updateStateField('contentWidth', selected)
						}
						title='ширина контента'></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
