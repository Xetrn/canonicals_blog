import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { CSSProperties, useState } from 'react';
import { ParamsContent } from '../params-content/ParamsContent';
import { ICSSOptions } from 'src/index';
import { defaultArticleState } from 'src/constants/articleProps';

interface ArticleParamsFormProps {
	CSSProperties: ICSSOptions;
	setCSSProperties: React.Dispatch<React.SetStateAction<ICSSOptions>>;
}

export const ArticleParamsForm = ({
	CSSProperties,
	setCSSProperties,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [tempProperties, setTempProperties] =
		useState<ICSSOptions>(CSSProperties);

	const defaultProperties: ICSSOptions = {
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
		fontSizeOption: defaultArticleState.fontSizeOption,
	};

	const resetProperties = () => {
		setCSSProperties(defaultProperties);
		setTempProperties(defaultProperties);
	};

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
					console.log('pepega');
				}}
			/>
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form className={styles.form}>
					<ParamsContent
						tempProperties={tempProperties}
						setTempProperties={setTempProperties}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='button' onClick={resetProperties} />
						<Button
							title='Применить'
							type='button'
							onClick={() => setCSSProperties(tempProperties)}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
