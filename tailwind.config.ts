import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{vue,js}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				primary: '#00095e',
				secondary: '#e3b200',
			},
			fontFamily: {
				primary: ['Microsoft YaHei', 'Noto Sans SC', 'sans-serif'],
			},
			screens: {
				md: { max: '854px' },
				mi: { max: '500px' },
				lg: '855px',
			},
			keyframes: {
				simpleBounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				carmove: {
					'0%, 100%': { transform: 'translateX(-2vw)' },
					'20%': { transform: 'translateX(5vw)' },
					'40%': { transform: 'translateX(15vw)' },
					'60%': { transform: 'translateX(10vw)' },
					'80%': { transform: 'translateX(5vw)' },
				},
				peoplemove: {
					'0%': { transform: 'translateX(0vw)' },
					'20%': { transform: 'translateX(20vw)' },
					'40%': { transform: 'translateX(40vw)' },
					'60%': { transform: 'translateX(60vw)' },
					'80%': { transform: 'translateX(80vw)' },
					'100%': { transform: 'translateX(100vw)' },
				},
			},
		},
	},
	 
	daisyui: {
		themes: false,
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),require('@tailwindcss/aspect-ratio'), require('daisyui')],
} satisfies Config;
