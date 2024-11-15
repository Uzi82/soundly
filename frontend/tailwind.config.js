/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{html,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				c3: '3px',
				c5: '5px',
				c6: '6px',
				c30: '30px',
				c45: '45px',
				wrapper: '1280px',
			},
			colors: {
				bg: 'rgb(40, 40, 40)',
				'bg-dark': 'rgb(22, 22, 22)',
				purple: 'rgb(88, 101, 242)',
			},
			fontSize: {
				inheritSize: 'inherit',
			},
			fontFamily: {
				bold: ['T-bold', 'sans-serif'],
				regular: ['T-regular', 'sans-serif'],
				light: ['T-light', 'sans-serif'],
			},
			letterSpacing: {
				c1: '1.4px',
				c2: '2px',
				c3: '2.6px',
			},
			lineHeight: {
				c1: '3.5rem',
				c2: '4rem',
				c3: '4.5rem',
			},
			keyframes: {
				appear: {
					'0%': {
						opacity: 0,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
			animation: {
				appear: 'appear 2s',
			},
		},
	},
	plugins: [],
};
