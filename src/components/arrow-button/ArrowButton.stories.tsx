import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';
import { useState } from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		const [isActive, setIsActive] = useState(false);

		const handleClick = () => {
			setIsActive((prev) => !prev);
		};

		return (
			<ArrowButton handleClick={handleClick} state={isActive} />
		);
	},
};
