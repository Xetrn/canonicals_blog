import type { FC } from 'react';

import { Select } from 'src/components/select';
import { contentWidthArr } from 'src/constants/articleProps';

import type { SelectControlPropsType } from '../types/select-control-props.type';

type ContentWidthSelectProps = SelectControlPropsType;

export const ContentWidthSelect: FC<ContentWidthSelectProps> = ({
	selected,
	onChange,
}) => {
	return (
		<Select
			title='Ширина контента'
			selected={selected}
			onChange={onChange}
			options={contentWidthArr}
		/>
	);
};
