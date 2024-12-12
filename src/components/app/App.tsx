import { useState, CSSProperties } from 'react';
import styles from '../../styles/index.module.scss';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState } from '../../constants/articleProps';
import clsx from 'clsx';

export const App = () => {
	const [articleState, setArticleState] = useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppState={setArticleState} />
			<Article />
		</div>
	);
};