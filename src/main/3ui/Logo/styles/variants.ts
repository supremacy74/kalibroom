import { Variants } from 'framer-motion'

export const logoV: Variants = {
	on: {
		msTransformOrigin: 'left',
		width: 'auto',
		marginLeft: '.5rem',
		opacity: 1,
	},
	off: {
		msTransformOrigin: 'left',
		width: '0',
		marginLeft: '0rem',
		opacity: 0,
	},
}
