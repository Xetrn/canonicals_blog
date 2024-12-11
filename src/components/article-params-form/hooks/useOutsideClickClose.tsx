import { RefObject, useEffect, useRef } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onClose: () => void;
	rootRef: RefObject<HTMLDivElement>;
};

export const useOutsideClickCloseForm = ({
	isOpen,
	onClose,
	rootRef,
}: UseOutsideClickClose) => {
	const isContain = useRef(false);

	useEffect(() => {
		const handleClick = () => {
			if (!isContain.current) {
				isOpen && onClose?.();
			} else {
				isContain.current = false;
			}
		};

		const handleContainCheck = (evt: MouseEvent) => {
			if (evt.target instanceof Node && rootRef.current?.contains(evt.target)) {
				isContain.current = true;
			}
		};

		const handleKeyDown = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape' && isOpen) {
				onClose?.();
			}
		};

		rootRef.current?.addEventListener('mousedown', handleContainCheck);
		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			rootRef.current?.removeEventListener('mousedown', handleContainCheck);
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);
};