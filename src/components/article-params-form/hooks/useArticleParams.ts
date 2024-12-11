import { CSSProperties, useMemo, useState } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export const useArticleParams = () => {
	const [articleParams, setArticleParams] =
		useState<ArticleStateType>(defaultArticleState);

	const articleStyles = useMemo(
		() =>
			({
				'--font-family': articleParams.fontFamilyOption.value,
				'--font-size': articleParams.fontSizeOption.value,
				'--font-color': articleParams.fontColor.value,
				'--container-width': articleParams.contentWidth.value,
				'--bg-color': articleParams.backgroundColor.value,
			} as CSSProperties),
		[articleParams]
	);

	const resetToDefault = () => setArticleParams(defaultArticleState);

	return { articleParams, articleStyles, setArticleParams, resetToDefault };
};
