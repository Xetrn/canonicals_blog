import { RefObject, useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onClose?: () => void;
	rootRef: RefObject<HTMLDivElement>;
};

export const useOutsideClickCloseForm = ({
	isOpen,
	rootRef,
	onClose,
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
				}
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				onClose?.();
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
	}, [isOpen, rootRef, onClose]);
};
