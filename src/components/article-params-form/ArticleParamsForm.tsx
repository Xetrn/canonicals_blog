import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickHandler } from './hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	articleParams: (settings: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ articleParams }: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [settingsState, setSettingsState] = useState<ArticleStateType>(defaultArticleState);

	const {
		fontFamilyOption,
		fontColor,
		backgroundColor,
		contentWidth,
		fontSizeOption,
	} = settingsState;

	const formElementRef = useRef<HTMLDivElement | null>(null);

	const onClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleClearForm = (evt: FormEvent) => {
		evt.preventDefault();
		setSettingsState(defaultArticleState);
		articleParams(defaultArticleState);
	};

	const handleSubmitForm = (evt: FormEvent) => {
		evt.preventDefault();
		articleParams(settingsState);
	};

	const updateFormState = (newParams: Partial<ArticleStateType>) => {
		setSettingsState((prevParams) => ({
			...prevParams,
			...newParams,
		}));
	};

	useOutsideClickHandler({
		isVisible: isMenuOpen,
		containerRef: formElementRef,
		onClose: onClick,
	});

	return (
		<div ref={formElementRef}>
			<ArrowButton onClick={onClick} isOpen={isMenuOpen} />
			<aside
				className={clsx(styles.container, isMenuOpen ? styles.container_open : '')}>
				<form
					className={styles.form}
					onReset={handleClearForm}
					onSubmit={handleSubmitForm}>
					<Text as='p' size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={fontFamilyOption}
						onChange={(selected: OptionType) =>
							updateFormState({ fontFamilyOption: selected })
						} 
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={(selected: OptionType) =>
							updateFormState({ fontSizeOption: selected })
						}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={fontColor}
						onChange={(selected: OptionType) =>
							updateFormState({ fontColor: selected })
						}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={backgroundColor}
						onChange={(selected: OptionType) =>
							updateFormState({ backgroundColor: selected })
						}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={contentWidth}
						onChange={(selected: OptionType) =>
							updateFormState({ contentWidth: selected })
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};