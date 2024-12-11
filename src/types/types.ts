import { OptionType } from 'src/constants/articleProps';

export interface IStyles {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
}

export interface IStylesContextValue {
	stylesList: IStyles;
	setStylesList: (styles: IStyles) => void;
}
