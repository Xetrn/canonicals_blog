import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

import { defaultArticleState } from 'src/constants/articleProps';
import type { ArticleStateType, OptionType } from 'src/constants/articleProps';

export const useArticleStyleControls = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	const [articleStyles, setArticleStyles] = useState<CSSProperties>({});

	const registerStyleControl = (key: keyof ArticleStateType) => {
		return {
			onChange: (value: OptionType) => {
				setArticleState((prev) => ({
					...prev,
					[key]: value,
				}));
			},
			selected: articleState[key],
		};
	};

	const updateStyles = (state: ArticleStateType = articleState) => {
		setArticleStyles({
			'--font-family': state.fontFamilyOption.value,
			'--font-size': state.fontSizeOption.value,
			'--font-color': state.fontColor.value,
			'--container-width': state.contentWidth.value,
			'--bg-color': state.backgroundColor.value,
		} as CSSProperties);
	};

	const resetStyles = () => {
		setArticleState(defaultArticleState);
		updateStyles(defaultArticleState);
	};

	useEffect(() => {
		updateStyles();
	}, []);

	return { articleStyles, registerStyleControl, updateStyles, resetStyles };
};
