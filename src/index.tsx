import { createRoot } from 'react-dom/client';
import { createContext, StrictMode, useContext, useState } from 'react';

import './styles/index.scss';
import { App } from './App';
import { IStyles, IStylesContextValue } from './types/types';
import {
	backgroundColors,
	defaultArticleState,
} from './constants/articleProps';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export const StylesContext = createContext<IStylesContextValue>(
	{} as IStylesContextValue
);

const StylesProvider = ({ children }: { children: React.ReactNode }) => {
	const [stylesList, setStylesList] = useState<IStyles>({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: backgroundColors[4],
		contentWidth: defaultArticleState.contentWidth,
		fontSizeOption: defaultArticleState.fontSizeOption,
	});

	return (
		<StylesContext.Provider value={{ stylesList, setStylesList }}>
			{children}
		</StylesContext.Provider>
	);
};

root.render(
	<StrictMode>
		<StylesProvider>
			<App />
		</StylesProvider>
	</StrictMode>
);
