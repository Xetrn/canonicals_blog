import { useState, useCallback, useEffect, SetStateAction } from 'react';
import { ArticleStateType, OptionType } from 'src/constants/articleProps';

type UseArticleParamsFormType = {
	initialParams: ArticleStateType;
	setParams: React.Dispatch<SetStateAction<ArticleStateType>>;
	resetParams: () => void;
};

export const useArticleParamsForm = ({
	initialParams,
	setParams,
	resetParams,
}: UseArticleParamsFormType) => {
	const [formInputs, setFormInputs] = useState<ArticleStateType>(initialParams);

	const changeHandler = useCallback((key: keyof ArticleStateType) => {
		return (value: OptionType) =>
			setFormInputs((prev) => ({
				...prev,
				[key]: value,
			}));
	}, []);

	useEffect(() => {
		setFormInputs(initialParams);
	}, [initialParams]);

	const handleReset = useCallback(() => {
		resetParams();
	}, [resetParams]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setParams(formInputs);
	};

	return { handleSubmit, handleReset, formInputs, changeHandler };
};
