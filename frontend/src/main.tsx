import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' };
import { router } from './pages/routes';
import './style.css';

createRoot(document.getElementById('root')!).render(
	<IconProvider value={IconConfig}>
		<RouterProvider router={router} />
	</IconProvider>,
);
