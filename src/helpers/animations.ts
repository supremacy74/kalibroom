import { Transition } from 'framer-motion'

export const getCommonAnimation = (
	initial: string = 'off',
	animate: string = 'on',
	exit: string = 'off'
) => {
	return {
		initial: initial,
		animate: animate,
		exit: exit,
	}
}

export const getSpringTransition = (
	damping: number = 7,
	stiffness: number = 40
): Transition => {
	return {
		damping,
		stiffness,
		restDelta: 0.1,
		type: 'spring'
	}
}
