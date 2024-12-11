import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = <T extends HTMLElement>({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose): RefObject<T> => {
	const optionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				target instanceof Node &&
				!rootRef.current?.contains(target) &&
				!optionRef.current?.contains(target)
			) {
				if (isOpen) {
					onClose?.();
				}
				onChange?.(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [onClose, onChange, isOpen]);

	return optionRef as RefObject<T>;
};
