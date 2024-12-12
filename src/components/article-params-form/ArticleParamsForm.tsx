import { useState, FormEvent, useRef } from 'react';
import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import { clsx } from 'clsx';
import {
	ArticleStateType,
	OptionType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from '../../constants/articleProps';
import { Text } from '../text';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	applyParams: (params: ArticleStateType) => void;
	resetParams: () => void;
}

export const ArticleParamsForm = ({
	applyParams,
	resetParams,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const formRef = useRef<HTMLDivElement>(null);

	const toggleForm = () => setIsOpen(!isOpen);

	useOutsideClickClose({
		isOpen,
		rootRef: formRef,
		onClose: toggleForm,
		onChange: setIsOpen,
	});

	const handleSelectChange = (
		selected: OptionType,
		key: keyof ArticleStateType
	) => {
		setArticleState((prevState) => ({
			...prevState,
			[key]: selected,
		}));
	};

	const handleApply = () => {
		applyParams(articleState);
	};

	const handleReset = () => {
		setArticleState(defaultArticleState);
		resetParams();
	};

	return (
		<div ref={formRef}>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					onSubmit={(e: FormEvent) => e.preventDefault()}
					className={styles.form}>
					<Text as='h2' weight={800} size={31} uppercase>
						Задайте параметры
					</Text>

					<Spacing size={50} />

					<Select
						selected={articleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) =>
							handleSelectChange(selected, 'fontFamilyOption')
						}
						title='Шрифт'
					/>

					<Spacing size={50} />

					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={articleState.fontSizeOption}
						onChange={(selected) =>
							handleSelectChange(selected, 'fontSizeOption')
						}
						title='Размер шрифта'
					/>

					<Spacing size={50} />

					<Select
						selected={articleState.fontColor}
						options={fontColors}
						onChange={(selected) => handleSelectChange(selected, 'fontColor')}
						title='Цвет шрифта'
					/>

					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />

					<Select
						selected={articleState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) =>
							handleSelectChange(selected, 'backgroundColor')
						}
						title='Цвет фона'
					/>

					<Spacing size={50} />

					<Select
						selected={articleState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) =>
							handleSelectChange(selected, 'contentWidth')
						}
						title='Ширина контента'
					/>

					<Spacing size={50} />

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' onClick={handleApply} />
					</div>
				</form>
			</aside>
		</div>
	);
};
