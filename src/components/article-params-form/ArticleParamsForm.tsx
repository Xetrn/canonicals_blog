import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Spacing } from '../spacing';
import { Text } from '../text';
import styles from './ArticleParamsForm.module.scss';
import { OptionType, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, defaultArticleState } from '../../constants/articleProps';
import { useState } from 'react';

type Styles = {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
};

interface ArticleProps {
	newStyles: (newStyles: Partial<Styles>) => void;
	currentStyles: Styles;
	setOpenForm: () => void;
	openForm: boolean;
}

export const ArticleParamsForm: React.FC<ArticleProps> = ({ newStyles, currentStyles, setOpenForm, openForm }) => {
	const [form, setForm] = useState(currentStyles);
	const [resetKey, setResetKey] = useState(0);

	const handleChange = (key: keyof Styles) => (selected: OptionType) => {
		setForm(prev => ({
		  ...prev,
		  [key]: selected
		}));
	};
	
	return (
		<>
			<ArrowButton onClick={setOpenForm} openForm={openForm}/>
			<aside
				className={`${styles.container} ${openForm ? styles.container_open : ''}`}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Spacing size={50} />

					<Select
						title='шрифт' 
						selected={form.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleChange('fontFamilyOption')}
					/>

					<Spacing size={50} />

					<RadioGroup 
						title='размер шрифта'
						key={resetKey}
						selected={form.fontSizeOption} 
						name={form.fontSizeOption.title}
						options={fontSizeOptions}
						onChange={handleChange('fontSizeOption')}
					/>

					<Spacing size={50} />

					<Select 
						title='цвет шрифта'
						selected={form.fontColor}
						options={fontColors}
						onChange={handleChange('fontColor')}
					/>

					<Spacing size={50} />
					<Separator/>
					<Spacing size={50} />

					<Select 
						title='цвет фона'
						selected={form.backgroundColor}
						options={backgroundColors}
						onChange={handleChange('backgroundColor')}
					/>

					<Spacing size={50} />

					<Select 
						title='ширина контента'
						selected={form.contentWidth}
						options={contentWidthArr} 
						onChange={handleChange('contentWidth')}
					/>

					<Spacing size={207} />

					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								newStyles(defaultArticleState);
								setForm(defaultArticleState); 
								setResetKey(Math.random()); 
							}}
						/>
						
						<Button 
							title='Применить' 
							type='submit'
							onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
								event.preventDefault();
								newStyles(form);
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};