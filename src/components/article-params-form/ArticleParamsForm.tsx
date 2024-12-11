import { SetStateAction } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { Text } from '../text';
import { Spacing } from '../spacing';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useArticleParamsForm } from './hooks/useArticleParamsForm';

type ArticleParamsFormProps = {
	params: ArticleStateType;
	setParams: React.Dispatch<SetStateAction<ArticleStateType>>;
	resetParams: () => void;
};

export const ArticleParamsForm = ({
	params,
	setParams,
	resetParams,
}: ArticleParamsFormProps) => {
	const { handleReset, handleSubmit, formInputs, changeHandler } =
		useArticleParamsForm({
			initialParams: params,
			setParams,
			resetParams,
		});

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<Text weight={800} size={31}>
				Задайте параметры
			</Text>
			<Spacing size={50} />
			<Select
				onChange={changeHandler('fontFamilyOption')}
				selected={formInputs.fontFamilyOption}
				title='шрифт'
				options={fontFamilyOptions}
			/>
			<Spacing size={50} />
			<RadioGroup
				key={formInputs.fontSizeOption.value}
				name={formInputs.fontSizeOption.value}
				selected={formInputs.fontSizeOption}
				options={fontSizeOptions}
				onChange={changeHandler('fontSizeOption')}
				title='размер шрифта'
			/>
			<Spacing size={50} />
			<Select
				selected={formInputs.fontColor}
				onChange={changeHandler('fontColor')}
				options={fontColors}
				title='цвет шрифта'
			/>
			<Spacing size={50} />
			<Separator />
			<Spacing size={50} />
			<Select
				selected={formInputs.backgroundColor}
				onChange={changeHandler('backgroundColor')}
				options={backgroundColors}
				title='цвет фона'
			/>
			<Spacing size={50} />
			<Select
				selected={formInputs.contentWidth}
				onChange={changeHandler('contentWidth')}
				options={contentWidthArr}
				title='ширина контента'
			/>
			<div className={styles.bottomContainer}>
				<Button onClick={handleReset} title='Сбросить' type='reset' />
				<Button title='Применить' type='submit' />
			</div>
		</form>
	);
};
