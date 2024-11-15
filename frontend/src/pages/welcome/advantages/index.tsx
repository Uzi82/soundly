import { PlayOne } from '@icon-park/react';

import styles from './advantages.module.scss';

import { HeaderText } from '@/components/headerText';
import { ShiningIco } from '@/components/shiningIco';

export const Advantages = () => {
	const screenWidth = document.documentElement.clientWidth;
	return (
		<div className={styles.container} id="advantages">
			<div className={styles.content}>
				<ShiningIco
					Icon={PlayOne}
					size={screenWidth > 767 ? 400 : 200}
					stroke={1}
				/>
				<div className={styles.text}>
					<HeaderText
						size={
							screenWidth > 1120 ? '64px' : screenWidth > 767 ? '40px' : '32px'
						}
						btn={false}
						weight="300">
						Никаких ограничений!
					</HeaderText>
					<p className={styles['text-p']}>
						&nbsp;&nbsp;&nbsp;&nbsp;В нашем проекте нет никаких платных
						подписок, дающих доступ к базовым функциям музыкального сервиса. Все
						возможности нашего web-приложения доступны каждому пользователю
						сразу после регистрации.
					</p>
				</div>
			</div>
		</div>
	);
};
