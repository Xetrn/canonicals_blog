import type { OptionType } from 'src/constants/articleProps';

export type SelectControlPropsType = {
	onChange?: (selected: OptionType) => void;
	selected: OptionType;
};
