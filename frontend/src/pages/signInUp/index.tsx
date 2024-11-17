export { Registration } from './registration';
export { Login } from './login';
import clsx from 'clsx';
import { Link, Outlet, useLocation } from 'react-router-dom';

import styles from './signInUp.module.scss';

import { BgParticles } from '@/components/bgParticles';

export const Sign = () => {
	const path = useLocation().pathname.split('/').at(-1);
	console.log(document.getElementById('content')?.clientHeight);
	return (
		<div className={styles.contrainer}>
			<BgParticles />
			{/* <div
				className={clsx(styles['content-under'], styles.centred)}
				style={{
					height: document.getElementById('content')?.clientHeight,
				}}
			/> */}
			<div className={clsx(styles.content, styles.centred)} id="content">
				<Outlet />
			</div>
			<Link
				to={path === 'registration' ? '/sign/login' : '/sign/registration'}
				className={styles.redir}>
				{path === 'registration'
					? 'Я тут уже был...'
					: 'Может лучше сначала зарегистрироваться?...'}
			</Link>
		</div>
	);
};
