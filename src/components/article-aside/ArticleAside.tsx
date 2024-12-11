import { clsx } from 'clsx';
import { useState } from 'react';
import { useClickOutside } from 'src/hooks';
import { ArrowButton } from 'components/arrow-button';
import styles from './ArticleAside.module.scss';

type ArticleAsideProps = {
	children: React.ReactNode;
};

export const ArticleAside = ({ children }: ArticleAsideProps) => {
	const [isOpen, setIsOpened] = useState<boolean>(false);
	const asideRef = useClickOutside<HTMLDivElement>(
		() => isOpen && setIsOpened(false)
	);

	return (
		<>
			<ArrowButton isActive={isOpen} onClick={() => setIsOpened(!isOpen)} />
			<aside
				ref={asideRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				{children}
			</aside>
		</>
	);
};
