import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

const App = () => {
	const [openForm, setOpenForm] = useState<boolean>(false);

	const [stylesObject, setStylesObject] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		contentWidth: defaultArticleState.contentWidth,
		backgroundColor: defaultArticleState.backgroundColor,
	});

	const updateStyles = (newStyles: Partial<typeof stylesObject>) => {
		setStylesObject((oldStyles) => ({
		  ...oldStyles,
		  ...newStyles,
		}));
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': stylesObject.fontFamilyOption.value,
					'--font-color': stylesObject.fontColor.value,
					'--bg-color': stylesObject.backgroundColor.value,
					'--container-width': stylesObject.contentWidth.value,
					'--font-size': stylesObject.fontSizeOption.value,
				} as CSSProperties
			}
		>
			<ArticleParamsForm 
				openForm={openForm}
				setOpenForm={() => setOpenForm(prev => !prev)} 
				currentStyles={stylesObject} 
				newStyles={updateStyles} 
			/>
			<Article 
				closeForm={() => setOpenForm(false)}
			/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);