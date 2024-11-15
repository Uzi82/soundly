import { MusicOne } from '@icon-park/react';

import styles from './intro.module.scss';
import { IntroText } from './introText';

import { ShiningIco } from '@/components/shiningIco';

export const Intro = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<IntroText />
				<ShiningIco Icon={MusicOne} stroke={1} size={370} />
			</div>
		</div>
	);
};
