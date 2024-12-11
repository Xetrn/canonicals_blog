import type { FC } from 'react';

import { Select } from 'src/components/select';
import { backgroundColors } from 'src/constants/articleProps';

import type { SelectControlPropsType } from '../types/select-control-props.type';

type BackgroundColorSelectProps = SelectControlPropsType;

export const BackgroundColorSelect: FC<BackgroundColorSelectProps> = ({
	selected,
	onChange,
}) => {
	return (
		<Select
			selected={selected}
			options={backgroundColors}
			title='Цвет фона'
			onChange={onChange}
		/>
	);
};
