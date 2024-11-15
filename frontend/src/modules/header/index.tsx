import styles from './header.module.scss';

import { HeaderText } from '@/components/headerText';

export const Header = ({ main = false }: { main?: boolean }) => {
	const screenWidth = document.documentElement.clientWidth;
	return (
		<div className={styles.content}>
			<div className={styles.container}>
				<div>logo</div>
				<div className={styles.btns}>
					{main && screenWidth > 767 && (
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
						<HeaderText
							isLink
							btn={false}
							href="/registration"
							size={screenWidth > 767 ? '20px' : '14px'}>
							Зарегистрироваться
						</HeaderText>
						<HeaderText
							isLink
							btn={false}
							href="/login"
							size={screenWidth > 767 ? '20px' : '14px'}>
							Войти
						</HeaderText>
					</div>
				</div>
			</div>
		</div>
	);
};
