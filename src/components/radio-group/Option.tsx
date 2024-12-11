import { useId, useRef } from 'react';

import { OptionType } from '@constants/articleProps';

import { useEnterSubmit } from './hooks/useEnterSubmit';

import styles from './RadioGroup.module.scss';

type OptionProps = {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

export const Option = (props: OptionProps) => {
	const { value, title, selected, groupName, onChange, option } = props;
	const id = useId();

	const optionRef = useRef<HTMLDivElement>(null);

	const handleChange = () => onChange?.(option);

	useEnterSubmit({ onChange, option });

	const isChecked = value === selected.title;

	return (
		<div
			className={styles.item}
			key={value}
			data-checked={isChecked}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={id}
				value={value}
				onChange={handleChange}
			/>
			<label className={styles.label} htmlFor={id}>
				{title}
			</label>
		</div>
	);
};
