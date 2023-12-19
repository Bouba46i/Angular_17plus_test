/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.form-btn': {
					textDecoration: 'none',
					background:
						'linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)), linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1))',
					backgroundSize: '100% 3px, 0 3px',
					backgroundPosition: '100% 95%, 0 95%',
					backgroundRepeat: 'no-repeat',
					transition: 'background-size 400ms',
					'&:hover': {
						backgroundSize: '0 3px, 100% 3px',
					},
				},
			});
		}),
	],
};
