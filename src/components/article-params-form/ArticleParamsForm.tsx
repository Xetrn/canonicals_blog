import { ArrowButton } from '../arrow-button';
import { Button } from '../button';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';
import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import * as formSettings from '../../constants/articleProps';
import { defaultArticleState } from '../../constants/articleProps';

export interface Form {
	fontFamilyOption: formSettings.OptionType;
	fontSizeOption: formSettings.OptionType;
	fontColor: formSettings.OptionType;
	backgroundColor: formSettings.OptionType;
	contentWidth: formSettings.OptionType;
}
interface ArticleParamsFormProps {
	formValues: Form;
	setFormValues: (values: Form) => void;
	setOpenForm: () => void;
	openForm: boolean;
}
export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	formValues,
	setFormValues,
	setOpenForm,
	openForm,
}) => {
	const formRef = useRef<HTMLDivElement>(null);
	const [storageFormSettings, setStorageFormSettings] = useState<Form>({
		...formValues,
	});

	const handleChange = (key: keyof Form, value: formSettings.OptionType) => {
		setStorageFormSettings({
			...storageFormSettings,
			[key]: value,
		});
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormValues(storageFormSettings);
	};

	const handleResetApply = () => {
		setStorageFormSettings(defaultArticleState);
		setFormValues(defaultArticleState);
	};

	return (
		<div>
			<ArrowButton onClick={setOpenForm} isOpen={openForm} />
			<aside
				ref={formRef}
				className={clsx(styles.container, {
					[styles.container_open]: openForm,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} align='left' uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						title='шрифт'
						selected={storageFormSettings.fontFamilyOption}
						options={formSettings.fontFamilyOptions}
						onChange={(item) => handleChange('fontFamilyOption', item)}
					/>
					<Spacing size={50} />
					<RadioGroup
						name='radio'
						title='размер шрифта'
						selected={storageFormSettings.fontSizeOption}
						options={formSettings.fontSizeOptions}
						onChange={(item) => handleChange('fontSizeOption', item)}
					/>
					<Spacing size={50} />
					<Select
						title='цвет шрифта'
						selected={storageFormSettings.fontColor}
						options={formSettings.fontColors}
						onChange={(item) => handleChange('fontColor', item)}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						title='Цвет фона'
						selected={storageFormSettings.backgroundColor}
						options={formSettings.backgroundColors}
						onChange={(item) => handleChange('backgroundColor', item)}
					/>
					<Spacing size={50} />
					<Select
						title='Ширина контента'
						selected={storageFormSettings.contentWidth}
						options={formSettings.contentWidthArr}
						onChange={(item) => handleChange('contentWidth', item)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleResetApply} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
