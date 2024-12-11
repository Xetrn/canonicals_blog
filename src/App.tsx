import clsx from 'clsx';
import { CSSProperties, useContext } from 'react';
import { Article } from './components/article';
import { ArticleParamsForm } from './components/article-params-form';
import { defaultArticleState } from './constants/articleProps';

import styles from './styles/index.module.scss';
import { StylesContext } from '.';

export const App = () => {
	const { stylesList } = useContext(StylesContext);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': stylesList.fontFamilyOption.value,
					'--font-size': stylesList.fontSizeOption.value,
					'--font-color': stylesList.fontColor.value,
					'--container-width': stylesList.contentWidth.value,
					'--bg-color': stylesList.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm />
			<Article />
		</div>
	);
};
