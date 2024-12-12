import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
<<<<<<< HEAD

export const ArticleParamsForm = () => {
	return (
		<>
			<ArrowButton />
			<aside
				className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
=======
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';
import { useArticleContext } from 'src/context/ArticleContext/ArticleContext';

export const ArticleParamsForm = () => {
	const [openForm, setOpenForm] = useState(true);
	const { params, setParams } = useArticleContext();
	const [unsaveParams, setUnsaveParams] = useState(defaultArticleState);
	const applyChanges = (e: SyntheticEvent) => {
		e.preventDefault();
		setParams(unsaveParams);
	};
	const setDefaultParams = (e: SyntheticEvent) => {
		e.preventDefault();
		setUnsaveParams(defaultArticleState);
		setParams(defaultArticleState);
	};
	const handleClick = () => setOpenForm((prevState) => !prevState);
	const handleChangeParams = (
		value: string,
		field: keyof ArticleStateType,
		options: OptionType[]
	) => {
		const needObj = options.find((obj) => obj.value === value);
		// setParams({ ...params, [field]: needObj });
		setUnsaveParams({ ...unsaveParams, [field]: needObj });
	};

	return (
		<>
			<ArrowButton OnClick={handleClick} openForm={openForm} />
			<aside
				className={clsx(styles.container, {
					[styles['container_open']]: openForm,
				})}>
				<form className={styles.form}>
					<Text weight={800} size={31} align='left' uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						title='Шрифт'
						// selected={params.fontFamilyOption}
						selected={unsaveParams.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(e) =>
							handleChangeParams(e.value, 'fontFamilyOption', fontFamilyOptions)
						}
					/>
					<Spacing size={50} />
					<RadioGroup
						name='Размер Шрифта'
						options={fontSizeOptions}
						// selected={params.fontSizeOption}
						selected={unsaveParams.fontSizeOption}
						title='Размер Шрифта'
						onChange={(e) =>
							handleChangeParams(e.value, 'fontSizeOption', fontSizeOptions)
						}
					/>
					<Spacing size={50} />
					<Select
						title='Цвет Шрифта'
						selected={unsaveParams.fontColor}
						// selected={params.fontColor}
						options={fontColors}
						onChange={(e) =>
							handleChangeParams(e.value, 'fontColor', fontColors)
						}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						title='Цвет Фона'
						selected={unsaveParams.backgroundColor}
						// selected={params.backgroundColor}
						options={backgroundColors}
						onChange={(e) =>
							handleChangeParams(e.value, 'backgroundColor', backgroundColors)
						}
					/>
					<Spacing size={50} />
					<Select
						title='Ширина Контента'
						selected={unsaveParams.contentWidth}
						// selected={params.contentWidth}
						options={contentWidthArr}
						onChange={(e) =>
							handleChangeParams(e.value, 'contentWidth', contentWidthArr)
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={setDefaultParams} />
						<Button title='Применить' type='submit' onClick={applyChanges} />
>>>>>>> myReadyProject/master
					</div>
				</form>
			</aside>
		</>
	);
};
