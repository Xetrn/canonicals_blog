import type { FC } from 'react';

import { Select } from 'src/components/select';
import { fontFamilyOptions } from 'src/constants/articleProps';

import type { SelectControlPropsType } from '../types/select-control-props.type';

type FontFamilySelectProps = SelectControlPropsType;

export const FontFamilySelect: FC<FontFamilySelectProps> = ({
	onChange,
	selected,
}) => {
	return (
		<Select
			title='Шрифт'
			options={fontFamilyOptions}
			selected={selected}
			onChange={onChange}
		/>
	);
};
