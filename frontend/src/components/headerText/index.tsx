import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';

import styles from './headerText.module.scss';

export const HeaderText = ({
	children,
	size = '16px',
	btn = true,
	a = false,
	href = '/',
	weight = '525px',
}: {
	children: ReactNode;
	size?: string;
	btn?: boolean;
	a?: boolean;
	href?: string;
	weight?: string;
}) => {
	const [focused, setFocused] = useState<boolean>();
	const focus = () => setFocused(true);
	const unfocus = () => setFocused(false);
	const content = (
		<h1 className={styles.mainText} style={{ fontWeight: weight }}>
			{children}
			<h1
				className={clsx(
					styles.bgText,
					focused ? styles.focused : styles.unfocused,
				)}
				style={{ fontWeight: weight }}>
				{children}
			</h1>
		</h1>
	);
	return (
		<div>
			{btn ? (
				<button
					className={styles.container}
					style={{
						fontSize: size,
					}}
					onMouseEnter={focus}
					onMouseLeave={unfocus}>
					{content}
				</button>
			) : a ? (
				<a
					className={styles.container}
					href={href}
					onMouseEnter={focus}
					onMouseLeave={unfocus}
					style={{
						fontSize: size,
					}}>
					{content}
				</a>
			) : (
				<div
					className={styles.container}
					style={{
						fontSize: size,
					}}>
					{content}
				</div>
			)}
		</div>
	);
};
