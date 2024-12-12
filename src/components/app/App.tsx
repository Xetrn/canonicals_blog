import { useState, CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './App.module.scss';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

export const App = () => {
	const [appOptions, setAppOptions] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appOptions.fontFamilyOption.value,
					'--font-size': appOptions.fontSizeOption.value,
					'--font-color': appOptions.fontColor.value,
					'--container-width': appOptions.contentWidth.value,
					'--bg-color': appOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppOptions={setAppOptions} />
			<Article />
		</div>
	);
};
