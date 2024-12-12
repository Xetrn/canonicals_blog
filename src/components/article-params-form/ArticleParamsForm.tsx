import { ArrowButton } from '../arrow-button/ArrowButton';
import { Button } from '../button/Button';

import styles from './ArticleParamsForm.module.scss';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';

import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	ArticleStateType,
	OptionType
} from '../../constants/articleProps';

interface ArticleParamsFormProps {
	setAppState: (state: ArticleStateType) => void;
  }

export const ArticleParamsForm = ({ setAppState }: ArticleParamsFormProps) => {
	const [formVisible, setFormVisible] = useState(false);
	const [formState, setFormState] = useState<ArticleStateType>(defaultArticleState);
	const formRef = useRef<HTMLDivElement>(null);

	const toggleFormVisibility = () => setFormVisible(!formVisible);

	const resetFormState = () => {
		setFormState(defaultArticleState);
		setAppState(defaultArticleState);
	};

	const restorePreviousState = (evt: React.SyntheticEvent) => {
		evt.preventDefault();
		setAppState(formState);
	};

	const updateFormState = (fieldName: string) => (value: OptionType) => 
		setFormState(prevState => ({ ...prevState, [fieldName]: value }));
	  

	useEffect(() => {
		const handleOutsideClick  = (event: MouseEvent) => {
			if (formRef.current && !formRef.current.contains(event.target as Node)) {
				setFormVisible(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick );
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick );
		};
	}, []);

	return (
		<>
			<ArrowButton handleClick={toggleFormVisibility} state={formVisible} />
			<aside ref={formRef} className={clsx(styles.container, formVisible && styles.container_open)}>
				<form className={styles.form} onSubmit={restorePreviousState}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={updateFormState('fontFamilyOption')}
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={updateFormState('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={updateFormState('fontColor')}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={updateFormState('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={updateFormState('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetFormState} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};