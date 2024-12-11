import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Separator } from '../separator';
import { Spacing } from '../spacing';
import { Text } from '../text';
import { CSSProperties } from 'react';
import { ICSSOptions } from 'src/index';

interface ParamsContentProps {
	tempProperties: ICSSOptions;
	setTempProperties: React.Dispatch<React.SetStateAction<ICSSOptions>>;
}

export const ParamsContent = ({
	tempProperties,
	setTempProperties,
}: ParamsContentProps) => {
	const handleChange = (key: keyof ICSSOptions) => (selected: OptionType) => {
		setTempProperties(() => ({
			...tempProperties,
			[key]: selected,
		}));
	};

	return (
		<>
			<Text as='div' family='open-sans' size={31} weight={800}>
				ЗАДАЙТЕ ПАРАМЕТРЫ
			</Text>
			<Spacing size={50} />
			<Select
				title='Шрифт'
				selected={tempProperties.fontFamilyOption}
				options={fontFamilyOptions}
				onChange={handleChange('fontFamilyOption')}
			/>
			<Spacing size={50} />
			<RadioGroup
				name='radio'
				options={fontSizeOptions}
				title='Размер шрифта'
				selected={tempProperties.fontSizeOption}
				onChange={handleChange('fontSizeOption')}
			/>
			<Spacing size={50} />
			<Select
				title='Цвет шрифта'
				selected={tempProperties.fontColor}
				options={fontColors}
				onChange={handleChange('fontColor')}
			/>
			<Spacing size={50} />
			<Separator />
			<Spacing size={50} />
			<Select
				title='Цвет фона'
				selected={tempProperties.backgroundColor}
				options={backgroundColors}
				onChange={handleChange('backgroundColor')}
			/>
			<Spacing size={50} />
			<Select
				title='Ширина контента'
				selected={tempProperties.contentWidth}
				options={contentWidthArr}
				onChange={handleChange('contentWidth')}
			/>
		</>
	);
};
