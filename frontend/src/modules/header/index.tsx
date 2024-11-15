import styles from './header.module.scss';

import { HeaderText } from '@/components/headerText';

export const Header = ({ main = false }: { main?: boolean }) => {
	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<div>logo</div>
				<div className={styles.btns}>
					{main && (
						<>
							<nav className={styles.navigation}>
								<HeaderText a btn={false} size="20px" href="#advantages">
									Преимущества
								</HeaderText>
								<HeaderText a btn={false} size="20px" href="#beta">
									BETA
								</HeaderText>
							</nav>
							<div className={styles.line} />{' '}
						</>
					)}

					<div className={styles.links}>
						<HeaderText size="20px">Зарегистрироваться</HeaderText>
						<HeaderText size="20px">Войти</HeaderText>
					</div>
				</div>
			</div>
		</div>
	);
};
