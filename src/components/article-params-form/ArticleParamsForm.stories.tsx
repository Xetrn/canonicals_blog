import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof ArticleParamsForm> = {
	component: ArticleParamsForm,
};

export default meta;
type Story = StoryObj<typeof ArticleParamsForm>;

export const ArticleParamsFormStory: Story = {
	render: () => {
		const handleFormSubmit = () => {
			console.log('form submitted');
		};
		const handleFormReset = () => {
			console.log('Данные обновлены');
		};
		const [isOpen, setIsOpen] = useState(false);
		return (
			<ArticleParamsForm
				handleFormSubmit={handleFormSubmit}
				handleFormReset={handleFormReset}
				isOpen={isOpen}
				setIsOpen={() => setIsOpen(!isOpen)}
			/>
		);
	},
};
