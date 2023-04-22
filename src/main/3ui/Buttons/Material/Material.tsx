import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './Material.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'

interface MaterialI {
	index: number
	currentIndex: number
	image: string
	setCurrentIndex: Dispatch<SetStateAction<number>>
}

const Material: FC<MaterialI> = props => {
	return (
		<div
			onClick={() => props.setCurrentIndex(props.index)}
			className={style.materialWrapper}>
			<div className={style.imageWrapper}>
				<Image
					className={style.image}
					src={props.image}
					alt={'mater'}
					width={100}
					height={100}
				/>
			</div>
			{props.currentIndex === props.index && (
				<motion.div
					className={style.border}
					layoutId={'currentMaterial'}
					transition={getSpringTransition(20, 110)}
				/>
			)}
		</div>
	)
}

export default memo(Material)
