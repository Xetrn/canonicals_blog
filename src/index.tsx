import { createRoot } from 'react-dom/client';
import { CSSProperties, StrictMode, useState } from 'react';
import clsx from 'clsx';

import { Article } from '@components/article/Article';
import { ArticleParamsForm } from '@components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from '@constants/articleProps';
import './index.scss';
import styles from './styles/index.module.scss';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
declare module 'react' {
	interface CSSProperties {
		'--font-family'?: string;
		'--font-size'?: string;
		'--font-color'?: string;
		'--container-width'?: string;
		'--bg-color'?: string;
	}
}
const App = () => {
	const [openForm, setOpenForm] = useState(false);
	const [formValues, setFormValues] = useState(defaultArticleState);

	const getStyle = (): CSSProperties => ({
		'--font-family': formValues.fontFamilyOption.value,
		'--font-size': formValues.fontSizeOption.value,
		'--font-color': formValues.fontColor.value,
		'--container-width': formValues.contentWidth.value,
		'--bg-color': formValues.backgroundColor.value,
	});

	return (
		<div className={clsx(styles.main)} style={getStyle()}>
			<ArticleParamsForm
				formValues={formValues}
				setFormValues={setFormValues}
				setOpenForm={() => setOpenForm((prev) => !prev)}
				openForm={openForm}
			/>
			<Article onClick={() => setOpenForm(false)} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
