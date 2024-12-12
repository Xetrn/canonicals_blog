import { createRoot } from 'react-dom/client';
import { StrictMode, useState, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

	const [stylesObject, setStylesObject] = useState({
		fontFamily: defaultArticleState.fontFamily,
		fontSize: defaultArticleState.fontSize,
		fontColor: defaultArticleState.fontColor,
		containerWidth: defaultArticleState.containerWidth,
		bgColor: defaultArticleState.bgColor,
	});

	const updateStyles = (newStyles: Partial<typeof stylesObject>) => {
		setStylesObject((prev) => ({
		  ...prev,
		  ...newStyles,
		}));
	  };

	const dynamicStyles: CSSProperties = {
		'--font-family': stylesObject.fontFamily.value,
		'--font-size': stylesObject.fontSize.value,
		'--font-color': stylesObject.fontColor.value,
		'--container-width': stylesObject.containerWidth.value,
		'--bg-color': stylesObject.bgColor.value,
	} as Record<string, string>;

	return (
		<div
			className={clsx(styles.main)}
			style={dynamicStyles}
		>
			<ArticleParamsForm 
				isFormOpen={isFormOpen} 
				setIsFormOpen={() => setIsFormOpen(prev => !prev)} 
				currentStyles={stylesObject} 
				updateStyles={updateStyles} 
			/>
			<Article 
				closeForm={() => setIsFormOpen(false)}
			/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
