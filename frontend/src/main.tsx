import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' };
import { router } from './pages/routes';
import './style.css';

createRoot(document.getElementById('root')!).render(
	<IconProvider value={IconConfig}>
		<ToastContainer
			position="top-center"
			autoClose={5000}
			limit={1}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover={false}
			theme="dark"
			transition={Flip}
		/>
		<RouterProvider router={router} />
	</IconProvider>,
);
