import { CSSProperties, useState } from 'react';

import { defaultArticleState } from '@constants/articleProps';
import { ArticleParamsForm } from '@components/article-params-form';
import { Article } from '@components/article';

import styles from './App.module.scss';

export const App = () => {
	const [style, setStyle] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': style.fontFamilyOption.value,
					'--font-size': style.fontSizeOption.value,
					'--font-color': style.fontColor.value,
					'--container-width': style.contentWidth.value,
					'--bg-color': style.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onStyleChange={setStyle} />
			<Article />
		</main>
	);
};
