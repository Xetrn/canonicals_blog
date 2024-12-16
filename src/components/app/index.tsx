import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from 'components/article-params-form';
import { Article } from 'components/article';

import clsx from 'clsx';
import styles from 'src/styles/index.module.scss';

const App = () => {
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

export default App;
