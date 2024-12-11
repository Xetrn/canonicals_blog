import type { FC } from 'react';

import { Select } from 'src/components/select';
import { fontColors } from 'src/constants/articleProps';

import type { SelectControlPropsType } from '../types/select-control-props.type';

type FontColorSelectProps = SelectControlPropsType;

export const FontColorSelect: FC<FontColorSelectProps> = ({
	selected,
	onChange,
}) => {
	return (
		<Select
			selected={selected}
			onChange={onChange}
			title='Цвет шрифта'
			options={fontColors}
		/>
	);
};
