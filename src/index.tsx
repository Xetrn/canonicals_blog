import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
<<<<<<< HEAD
=======
import {
	ArticleProvider,
	useArticleContext,
} from './context/ArticleContext/ArticleContext';
>>>>>>> myReadyProject/master

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
<<<<<<< HEAD
=======
	const { params } = useArticleContext();
>>>>>>> myReadyProject/master
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
<<<<<<< HEAD
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
=======
					'--font-family': params.fontFamilyOption.value,
					'--font-size': params.fontSizeOption.value,
					'--font-color': params.fontColor.value,
					'--container-width': params.contentWidth.value,
					'--bg-color': params.backgroundColor.value,
>>>>>>> myReadyProject/master
				} as CSSProperties
			}>
			<ArticleParamsForm />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
<<<<<<< HEAD
		<App />
=======
		<ArticleProvider>
			<App />
		</ArticleProvider>
>>>>>>> myReadyProject/master
	</StrictMode>
);
