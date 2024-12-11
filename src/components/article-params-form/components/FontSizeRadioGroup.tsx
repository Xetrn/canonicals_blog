import type { FC } from 'react';

import { RadioGroup } from 'src/components/radio-group';
import { fontSizeOptions } from 'src/constants/articleProps';

import type { SelectControlPropsType } from '../types/select-control-props.type';

type FontSizeRadioGroupProps = SelectControlPropsType;

export const FontSizeRadioGroup: FC<FontSizeRadioGroupProps> = ({
	onChange,
	selected,
}) => {
	return (
		<RadioGroup
			title={'Размер шрифта'}
			name={'font-size'}
			options={fontSizeOptions}
			selected={selected}
			onChange={onChange}
		/>
	);
};
