import styles from './intro.module.scss';

export const IntroText = () => {
	return (
		<div className={styles.text}>
			<h1 className={styles['text-above']}>
				Получи новый
				<br />
				музыкальный опыт
			</h1>
			<h1 className={styles['text-under']}>
				Получи новый
				<br />
				музыкальный опыт
			</h1>
			<h1 className={styles['text-gaus']}>
				Получи новый
				<br />
				музыкальный опыт
			</h1>
		</div>
	);
};
