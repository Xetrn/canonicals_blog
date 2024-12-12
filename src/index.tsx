import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useCallback } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ArticleStateType, defaultArticleState} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';


const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
	const [style, setStyle] = useState<ArticleStateType>(defaultArticleState);

	const handleApply = useCallback((selectedOption: ArticleStateType) => {
		setStyle(selectedOption);
	}, []);

	const toggleForm = useCallback(() => {
		setIsFormOpen((prev) => !prev);
	  }, []);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': style.fontFamilyOption.value,
					'--font-size': style.fontSizeOption.value,
					'--font-color': style.fontColor.value,
					'--container-width': style.contentWidth.value,
					'--bg-color': style.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onApply={handleApply}
				isOpen={isFormOpen}
				onToggle={toggleForm}
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
