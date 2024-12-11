import { FormEvent, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { ArrowButton } from '@components/arrow-button';
import { Button } from '@components/button';
import { Select } from '@components/select';
import { RadioGroup } from '@components/radio-group';
import { Separator } from '@components/separator';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from '@constants/articleProps';
import { Text } from '@components/text';
import { useOutsideClickClose } from '@components/select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	onStyleChange,
}: {
	onStyleChange: (style: ArticleStateType) => void;
}) => {
	const [newStyle, setNewStyle] = useState(defaultArticleState);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const asideRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen: isSidebarOpen,
		rootRef: asideRef,
		onClose: () => setIsSidebarOpen(false),
		onChange: setIsSidebarOpen,
	});

	const handleChange = (
		property: keyof typeof defaultArticleState,
		selected: OptionType
	) => {
		setNewStyle((prevStyle) => ({
			...prevStyle,
			[property]: selected,
		}));
	};

	const handleReset = () => {
		setNewStyle(defaultArticleState);
		onStyleChange(defaultArticleState);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onStyleChange(newStyle);
	};

	return (
		<div>
			<ArrowButton
				isOpen={isSidebarOpen}
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			/>
			<aside
				ref={asideRef}
				className={clsx(styles.container, {
					[styles.container_open]: isSidebarOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onClick={(event) => event.stopPropagation()}>
					<div className={styles.topContainer}>
						<Text as='h2' size={31} weight={800} uppercase align='left'>
							Задайте параметры
						</Text>
					</div>
					<div className={styles.middleContainer}>
						<Select
							title='Шрифт'
							options={fontFamilyOptions}
							selected={newStyle.fontFamilyOption}
							onChange={(selected: OptionType) =>
								handleChange('fontFamilyOption', selected)
							}
						/>
						<RadioGroup
							title='Размер шрифта'
							name='font-size'
							options={fontSizeOptions}
							selected={newStyle.fontSizeOption}
							onChange={(selected: OptionType) =>
								handleChange('fontSizeOption', selected)
							}
						/>
						<Select
							title='Цвет шрифта'
							options={fontColors}
							selected={newStyle.fontColor}
							onChange={(selected: OptionType) =>
								handleChange('fontColor', selected)
							}
						/>
						<Separator />
						<Select
							title='Цвет фона'
							options={backgroundColors}
							selected={newStyle.backgroundColor}
							onChange={(selected: OptionType) =>
								handleChange('backgroundColor', selected)
							}
						/>
						<Select
							title='Ширина контента'
							options={contentWidthArr}
							selected={newStyle.contentWidth}
							onChange={(selected: OptionType) =>
								handleChange('contentWidth', selected)
							}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
