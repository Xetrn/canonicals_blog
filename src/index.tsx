import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface ICSSOptions {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
}

const App = () => {
	const [CSSProperties, setCSSProperties] = useState<ICSSOptions>({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
		fontSizeOption: defaultArticleState.fontSizeOption,
	});

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': CSSProperties.fontFamilyOption.value,
					'--font-size': CSSProperties.fontSizeOption.value,
					'--font-color': CSSProperties.fontColor.value,
					'--container-width': CSSProperties.contentWidth.value,
					'--bg-color': CSSProperties.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				CSSProperties={CSSProperties}
				setCSSProperties={setCSSProperties}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
