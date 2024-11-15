import { PlayOne } from '@icon-park/react';

import styles from './advantages.module.scss';

import { HeaderText } from '@/components/headerText';
import { ShiningIco } from '@/components/shiningIco';

export const Advantages = () => {
	return (
		<div className={styles.container} id="advantages">
			<div className={styles.content}>
				<ShiningIco Icon={PlayOne} size={400} stroke={1} />
				<div className={styles.text}>
					<HeaderText size="48px" btn={false} weight="300">
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
