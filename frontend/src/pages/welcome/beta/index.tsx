import { Cuvette } from '@icon-park/react';

import styles from './beta.module.scss';

import { HeaderText } from '@/components/headerText';
import { ShiningIco } from '@/components/shiningIco';

export const Beta = () => {
	const screenWidth = document.documentElement.clientWidth;
	return (
		<div className={styles.container} id="beta">
			<div className={styles.content}>
				<div className={styles.text}>
					<HeaderText
						size={screenWidth > 1120 ? '64px' : '40px'}
						btn={false}
						weight="300">
						BETA версия
					</HeaderText>
					<p className={styles['text-p']}>
						&nbsp;&nbsp;&nbsp;&nbsp; Наш проект существует пока только в рамках
						BETA-версии. Если вы обнаружили какой-либо баг и/или у вас есть
						какие-либо предложения по улучшению или продвижению проекта, вы
						можете написать их в службу поддержки. Спасибо, что вы с нами!
					</p>
				</div>
				<ShiningIco
					Icon={Cuvette}
					size={screenWidth > 767 ? 400 : 200}
					stroke={1}
				/>
			</div>
		</div>
	);
};
