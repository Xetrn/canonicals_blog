import { createContext, ReactNode, useContext, useState } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

type ArticleContextProps = {
	params: ArticleStateType;
	setParams: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

const ArticleContext = createContext<ArticleContextProps | null>(null);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
	const [params, setParams] = useState(defaultArticleState);

	return (
		<ArticleContext.Provider value={{ params, setParams }}>
			{children}
		</ArticleContext.Provider>
	);
};

export const useArticleContext = () => {
	const context = useContext(ArticleContext);
	if (!context) {
		throw new Error('');
	}
	return context;
};
