import { RefObject, useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: RefObject<HTMLDivElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose): void => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				target instanceof Node &&
				rootRef.current &&
				!rootRef.current.contains(target)
			) {
				if (isOpen) {
					onClose?.();
					onChange(false);
				}
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose?.();
				onChange(false);
			}
		};

		if (isOpen) {
			window.addEventListener('mousedown', handleClick);
			window.addEventListener('keydown', handleKeyDown);
		} else {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, rootRef, onClose, onChange]);
};
