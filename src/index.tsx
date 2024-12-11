import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useRef } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { ArticleState, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleState>(defaultArticleState);

	const [isOpen, setIsOpen] = useState(false);

	const handleFormSubmit = ({ ...props }: ArticleState) => {
		setArticleState(props);
	};

	const handleFormReset = () => {
		setArticleState(defaultArticleState);
	};

	const bodyRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={bodyRef}
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
			<ArticleParamsForm
				handleFormSubmit={handleFormSubmit}
				handleFormReset={handleFormReset}
				setIsOpen={() => setIsOpen(!isOpen)}
				isOpen={isOpen}
			/>
			<Article onClick={isOpen ? () => setIsOpen(false) : undefined} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
