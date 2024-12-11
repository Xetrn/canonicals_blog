import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { clsx } from 'clsx';
import { Article } from 'components/article';
import {
	ArticleParamsForm,
	useArticleParams,
} from 'components/article-params-form';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { ArticleAside } from './components/article-aside';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const { articleStyles, articleParams, setArticleParams, resetToDefault } =
		useArticleParams();

	return (
		<div className={clsx(styles.main)} style={articleStyles}>
			<ArticleAside>
				<ArticleParamsForm
					params={articleParams}
					setParams={setArticleParams}
					resetParams={resetToDefault}
				/>
			</ArticleAside>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
