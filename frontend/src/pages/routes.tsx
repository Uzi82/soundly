import { createBrowserRouter } from 'react-router-dom';

import { Login, Registration, Sign } from './signInUp';
import { Welcome } from './welcome';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome />,
	},
	{
		path: '/sign',
		element: <Sign />,
		children: [
			{
				path: '/sign/registration',
				element: <Registration />,
			},
			{
				path: '/sign/login',
				element: <Login />,
			},
		],
	},
]);
