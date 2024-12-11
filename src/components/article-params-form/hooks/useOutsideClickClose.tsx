import { RefObject, useEffect, useRef } from 'react';

type UseOutsideClickHandler = {
	isVisible: boolean;
	onClose: () => void;
	containerRef: RefObject<HTMLDivElement>;
};

export const useOutsideClickHandler = ({
	isVisible,
	onClose,
	containerRef,
}: UseOutsideClickHandler) => {
	const isClickInside = useRef(false);

	useEffect(() => {
		const handleOutsideClick = () => {
			if (!isClickInside.current) {
			if (isVisible) {
				onClose?.();
			}
			} else {
			isClickInside.current = false;
			}
		};
	
		const checkIfClickInside = (event: MouseEvent) => {
			if (event.target instanceof Node && containerRef.current?.contains(event.target)) {
			isClickInside.current = true;
			}
		};
	
		const handleEscapeKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isVisible) {
				onClose?.();
			}
		};
	
		containerRef.current?.addEventListener('mousedown', checkIfClickInside);
		window.addEventListener('mousedown', handleOutsideClick);
		window.addEventListener('keydown', handleEscapeKeyPress);
	
		return () => {
			containerRef.current?.removeEventListener('mousedown', checkIfClickInside);
			window.removeEventListener('mousedown', handleOutsideClick);
			window.removeEventListener('keydown', handleEscapeKeyPress);
		};
	}, [isVisible, onClose]);
};