import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

export const BgParticles = () => {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<>
			{init && (
				<Particles
					id="tsparticles"
					style={{
						zIndex: -100,
						position: 'absolute',
					}}
					options={{
						background: {
							color: {
								value: '#161616',
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: false,
								},
								onHover: {
									enable: false,
								},
							},
						},
						particles: {
							color: {
								value: '#5865F2',
							},
							links: {
								color: '#5865F2',
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 2,
							},
							move: {
								direction: 'none',
								enable: true,
								outModes: {
									default: 'bounce',
								},
								random: false,
								speed: 6,
								straight: false,
							},
							number: {
								density: {
									enable: true,
								},
								value: 150,
							},
							opacity: {
								value: 1,
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
					}}
				/>
			)}
		</>
	);
};
