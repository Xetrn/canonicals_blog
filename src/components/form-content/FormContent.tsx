import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';

import styles from './FormContent.module.scss';
import { IStyles } from 'src/types/types';

interface FormContentProps {
	interimStyles: IStyles;
	handleChange: (key: keyof IStyles) => (selected: OptionType) => void;
}

export const FormContent = ({
	interimStyles,
	handleChange,
}: FormContentProps) => {
	return (
		<div className={styles.form_content}>
			<Text as='div' family='open-sans' size={31} weight={800}>
				ЗАДАЙТЕ ПАРАМЕТРЫ
			</Text>
			<Select
				selected={interimStyles.fontFamilyOption}
				options={fontFamilyOptions}
				title='Шрифт'
				onChange={handleChange('fontFamilyOption')}
			/>
			<RadioGroup
				selected={interimStyles.fontSizeOption}
				options={fontSizeOptions}
				title='Размер шрифта'
				name='radio'
				onChange={handleChange('fontSizeOption')}
			/>
			<Select
				selected={interimStyles.fontColor}
				options={fontColors}
				title='Цвет шрифта'
				onChange={handleChange('fontColor')}
			/>
			<Separator />
			<Select
				title='Цвет фона'
				selected={interimStyles.backgroundColor}
				options={backgroundColors}
				onChange={handleChange('backgroundColor')}
			/>
			<Select
				title='Ширина контента'
				selected={interimStyles.contentWidth}
				options={contentWidthArr}
				onChange={handleChange('contentWidth')}
			/>
		</div>
	);
};
