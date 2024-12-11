import clsx from 'clsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Article } from './components/article/Article';
import {
	ArticleParamsForm,
	BackgroundColorSelect,
	ContentWidthSelect,
	FontColorSelect,
	FontFamilySelect,
	FontSizeRadioGroup,
	useArticleStyleControls,
} from './components/article-params-form';
import { Separator } from './components/separator';
import { Spacing } from './components/spacing';
import styles from './styles/index.module.scss';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const { articleStyles, updateStyles, resetStyles, registerStyleControl } =
		useArticleStyleControls();

	return (
		<div className={clsx(styles.main)} style={articleStyles}>
			<ArticleParamsForm onSubmit={updateStyles} onReset={resetStyles}>
				<Spacing size={50} />
				<FontFamilySelect {...registerStyleControl('fontFamilyOption')} />

				<Spacing size={50} />
				<FontSizeRadioGroup {...registerStyleControl('fontSizeOption')} />

				<Spacing size={50} />
				<FontColorSelect {...registerStyleControl('fontColor')} />

				<Spacing size={50} />
				<Separator />

				<Spacing size={50} />
				<BackgroundColorSelect {...registerStyleControl('backgroundColor')} />

				<Spacing size={50} />
				<ContentWidthSelect {...registerStyleControl('contentWidth')} />
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
