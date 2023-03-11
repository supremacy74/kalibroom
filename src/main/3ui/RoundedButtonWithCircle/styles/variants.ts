import { Variants } from 'framer-motion'

export const circleV: Variants = {
	on: {
    background: '#c0ff0d',
		rotate: '90deg',
	},
	off: (isDarkTheme: boolean) => ({
		background: isDarkTheme ? '#fff' : '#252525',
		rotate: '0deg',
	}),
}
