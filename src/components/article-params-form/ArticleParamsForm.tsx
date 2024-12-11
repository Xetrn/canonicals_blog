import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'components/select';
import {
	ArticleState,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { FormEvent, useRef, useState } from 'react';
import { RadioGroup } from 'components/radio-group';
import { Spacing } from 'components/spacing';
import { Separator } from 'components/separator';
import clsx from 'clsx';

type Props = {
	handleFormSubmit: ({ ...props }: ArticleState) => void;
	handleFormReset: () => void;
	isOpen: boolean;
	setIsOpen: () => void;
};

export const ArticleParamsForm = (props: Props) => {
	const [articleState, setArticleState] =
		useState<ArticleState>(defaultArticleState);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.handleFormSubmit(articleState);
	};

	const handleFormReset = () => {
		setArticleState(defaultArticleState);
		props.handleFormReset();
	};

	return (
		<>
			<ArrowButton isOpen={props.isOpen} onClick={props.setIsOpen} />
			<aside
				className={clsx(
					styles.container,
					props.isOpen ? styles.container_open : ''
				)}>
				<form
					className={styles.form}
					onSubmit={(e) => handleFormSubmit(e)}
					onReset={() => {
						handleFormReset();
					}}>
					<Select
						options={fontFamilyOptions}
						selected={articleState['fontFamilyOption']}
						onChange={(e) =>
							setArticleState({
								...articleState,
								fontFamilyOption: e,
							})
						}
						title={'шрифт'}></Select>
					<Spacing size={50}></Spacing>
					<RadioGroup
						name={'fontSize'}
						options={fontSizeOptions}
						selected={articleState['fontSizeOption']}
						onChange={(e) =>
							setArticleState({
								...articleState,
								fontSizeOption: e,
							})
						}
						title={'размер шрифта'}></RadioGroup>
					<Spacing size={50}></Spacing>
					<Select
						title={'цвет шрифта'}
						selected={articleState['fontColor']}
						options={fontColors}
						onChange={(e) =>
							setArticleState({ ...articleState, fontColor: e })
						}></Select>
					<Spacing size={50}></Spacing>
					<Separator></Separator>
					<Spacing size={50}></Spacing>
					<Select
						title={'цвет фона'}
						selected={articleState['backgroundColor']}
						options={backgroundColors}
						onChange={(e) =>
							setArticleState({ ...articleState, backgroundColor: e })
						}></Select>
					<Spacing size={50}></Spacing>
					<Select
						title={'ширина контента'}
						selected={articleState['contentWidth']}
						options={contentWidthArr}
						onChange={(e) =>
							setArticleState({ ...articleState, contentWidth: e })
						}></Select>
					<Spacing size={50}></Spacing>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
