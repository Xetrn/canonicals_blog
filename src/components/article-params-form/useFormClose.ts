import { RefObject, useCallback, useEffect } from 'react';

type UseSideBarClose = {
	open: boolean;
	onClose: () => void;
	ref: RefObject<HTMLDivElement>;
};

export const useFormClose = ({ open, onClose, ref }: UseSideBarClose) => {
	const handleClick = useCallback(
		(e: MouseEvent) => {
			const { target } = e;
			if (target instanceof Element && !ref.current?.contains(target))
				onClose();
		},
		[onClose, ref]
	);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (open && e.key === 'Escape') {
				onClose();
			}
		},
		[open, onClose]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('mousedown', handleClick);
		};
	}, [open, onClose, ref, handleClick, handleKeyDown]);
};
