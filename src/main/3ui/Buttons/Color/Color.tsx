import { motion } from 'framer-motion'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './Color.module.scss'
import { getSpringTransition } from '@/helpers/animations'

interface ColorI {
	index: number
	currentIndex: number
	hex: string
	setCurrentIndex: Dispatch<SetStateAction<number>>
}

const Color: FC<ColorI> = props => {
	return (
		<div
			onClick={() => props.setCurrentIndex(props.index)}
			className={style.colorWrapper}>
			<div className={style.color} style={{ background: props.hex }} />
			{props.currentIndex === props.index && (
				<motion.div
					className={style.currentBorder}
					layoutId={'currentColor'}
					transition={getSpringTransition(20, 110)}
				/>
			)}
		</div>
	)
}

export default memo(Color)
