import { Icon } from '@icon-park/react/lib/runtime';

import styles from './shining.module.scss';

export const ShiningIco = ({
	Icon,
	size,
	stroke,
}: {
	Icon: Icon;
	size: number;
	stroke: number;
}) => {
	return (
		<div className={styles.ico}>
			<Icon
				className={styles['ico-above']}
				size={size}
				strokeWidth={stroke}
				fill={'#5865F2'}
			/>
			<Icon
				className={styles['ico-under']}
				size={size}
				strokeWidth={stroke}
				fill={'white'}
			/>
			<Icon
				className={styles['ico-gaus1']}
				size={size}
				strokeWidth={stroke}
				fill={'#5865F2'}
			/>
			<Icon
				className={styles['ico-gaus2']}
				size={size}
				strokeWidth={stroke}
				fill={'#5865F2'}
			/>
		</div>
	);
};
