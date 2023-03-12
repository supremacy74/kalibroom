import { Variants } from 'framer-motion'
import {getSpringTransition} from "@/helpers/animations";

export const productV: Variants = {
	on: {
		y: '0rem',
			opacity: 1,
	},
	off: {
		y: `5rem`,
		opacity: 0,
	},
}
