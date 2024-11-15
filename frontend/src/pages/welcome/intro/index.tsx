import { MusicOne } from '@icon-park/react';

import styles from './intro.module.scss';
import { IntroText } from './introText';

import { ShiningIco } from '@/components/shiningIco';

export const Intro = () => {
	const screenWidth = document.documentElement.clientWidth;
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<IntroText />
				<ShiningIco
					Icon={MusicOne}
					stroke={1}
					size={screenWidth > 1120 ? 370 : 200}
				/>
			</div>
		</div>
	);
};
