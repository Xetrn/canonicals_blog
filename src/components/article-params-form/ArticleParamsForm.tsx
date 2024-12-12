import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Spacing } from 'components/spacing';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { 
	OptionType, 
	fontFamilyOptions, 
	fontColors, 
	backgroundColors, 
	contentWidthArr, 
	fontSizeOptions, 
	defaultArticleState 
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

interface ArticleParamsFormProps {
	updateStyles: (newStyles: Partial<{ 
		fontFamily: OptionType; 
		fontSize: OptionType; 
		fontColor: OptionType; 
		containerWidth: OptionType; 
		bgColor: OptionType; 
	}>) => void;
	currentStyles: {
		fontFamily: OptionType;
		fontSize: OptionType;
		fontColor: OptionType;
		containerWidth: OptionType;
		bgColor: OptionType;
	};
	setIsFormOpen: () => void;
	isFormOpen: boolean;
  }

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({ updateStyles, currentStyles, setIsFormOpen, isFormOpen }) => {
	const [tempFormState, setTempFormState] = useState(currentStyles);
	const [resetKey, setResetKey] = useState(0);

	return (
		<>
			<ArrowButton onclick={setIsFormOpen} isFormOpen={isFormOpen}/>
			<aside
				className={`${styles.container} ${isFormOpen ? styles.container_open : ''}`}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Spacing size={50} />

					<Select 
						selected={tempFormState.fontFamily} 
						onChange={(selected: OptionType) => setTempFormState(prev => ({...prev, fontFamily: selected}))} 
						options={fontFamilyOptions} 
						title='шрифт'
					/>

					<Spacing size={50} />

					<RadioGroup 
						selected={tempFormState.fontSize} 
						name={tempFormState.fontSize.title} 
						onChange={(selected: OptionType) => setTempFormState(prev => ({...prev, fontSize: selected}))} 
						options={fontSizeOptions} 
						title='размер шрифта'
						key={resetKey} 
					/>

					<Spacing size={50} />

					<Select 
						selected={tempFormState.fontColor} 
						onChange={(selected: OptionType) => setTempFormState(prev => ({...prev, fontColor: selected}))} 
						options={fontColors} 
						title='цвет шрифта'
					/>

					<Spacing size={50} />

					<Separator/>

					<Spacing size={50} />

					<Select 
						selected={tempFormState.bgColor} 
						onChange={(selected: OptionType) => setTempFormState(prev => ({...prev, bgColor: selected}))} 
						options={backgroundColors} 
						title='цвет фона'
					/>

					<Spacing size={50} />

					<Select 
						selected={tempFormState.containerWidth} 
						onChange={(selected: OptionType) => setTempFormState(prev => ({...prev, containerWidth: selected}))} 
						options={contentWidthArr} 
						title='ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								updateStyles(defaultArticleState);
								setTempFormState(defaultArticleState); 
								setResetKey(Math.random()); 
							}}
						/>
						
						<Button 
							title='Применить' 
							type='submit'
							onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
								e.preventDefault();
								updateStyles(tempFormState);
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
