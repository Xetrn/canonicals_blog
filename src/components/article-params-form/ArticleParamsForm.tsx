import { FormEvent, useRef, useState } from 'react';

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
import { useOutsideClickHandler } from './hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	articleParams: (settings: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ articleParams }: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formParams, setFormParams] =
		useState<ArticleStateType>(defaultArticleState);

	const {
		fontFamilyOption,
		fontColor,
		backgroundColor,
		contentWidth,
		fontSizeOption,
	} = formParams;

	const refForm = useRef<HTMLDivElement | null>(null);

	const handleToggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	useOutsideClickHandler({
		isVisible: isOpen,
		containerRef: refForm,
		onClose: handleToggleMenu,
	});

	const updateFormParams = (newParams: Partial<ArticleStateType>) => {
		setFormParams((prevParams) => ({
			...prevParams,
			...newParams,
		}));
	};

	const handleFormReset = (evt: FormEvent) => {
		evt.preventDefault();
		setFormParams(defaultArticleState);
		articleParams(defaultArticleState);
	};

	const handleFormSubmit = (evt: FormEvent) => {
		evt.preventDefault();
		articleParams(formParams);
		handleToggleMenu();
	};

	return (
		<div ref={refForm}>
			<ArrowButton isOpen={isOpen} onClick={handleToggleMenu} />
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
							updateFormParams({ fontFamilyOption: selected })
						}
						title='шрифт'></Select>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={(selected: OptionType) =>
							updateFormParams({ fontSizeOption: selected })
						}
						title='размер шрифта'></RadioGroup>
					<Select
						selected={fontColor}
						options={fontColors}
						onChange={(selected: OptionType) =>
							updateFormParams({ fontColor: selected })
						}
						title='цвет шрифта'></Select>
					<Separator></Separator>
					<Select
						selected={backgroundColor}
						options={backgroundColors}
						onChange={(selected: OptionType) =>
							updateFormParams({ backgroundColor: selected })
						}
						title='цвет фона'></Select>
					<Select
						selected={contentWidth}
						options={contentWidthArr}
						onChange={(selected: OptionType) =>
							updateFormParams({ contentWidth: selected })
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