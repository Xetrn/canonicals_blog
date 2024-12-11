import { useEffect } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';

type UseEnterSubmit = {
	onChange: Dispatch<SetStateAction<boolean>>;
	placeholderRef: RefObject<HTMLButtonElement>;
};

export const useEnterSubmit = ({
	placeholderRef,
	onChange,
}: UseEnterSubmit) => {
	useEffect(() => {
		const placeholderEl = placeholderRef.current;
		if (!placeholderEl) return;

		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				onChange((isOpen: boolean) => !isOpen);
			}
		};
		placeholderEl.addEventListener('keydown', handleEnterKeyDown);

		return () => {
			placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, placeholderRef]);
};
