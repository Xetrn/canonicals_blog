import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';

import 'src/styles/index.scss';
import styles from './App.module.scss';
import { defaultArticleState } from 'src/constants/articleProps';

export const App = () => {
	const [articleStyle, setArticleStyle] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleStyle.fontFamilyOption.value,
					'--font-size': articleStyle.fontSizeOption.value,
					'--font-color': articleStyle.fontColor.value,
					'--container-width': articleStyle.contentWidth.value,
					'--bg-color': articleStyle.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm applyParams={setArticleStyle} />
			<Article />
		</div>
	);
};