import { FC, memo } from 'react'
import style from './ImageSelector.module.scss'
import Image from 'next/image'
import { mainImage } from '@/helpers/importImages'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import { imageI } from '@/interfaces/product'

interface ImageSelectorI {
	index: number
	currentImage: number
	setCurrentImage: Function
	image: imageI | null
}

const ImageSelector: FC<ImageSelectorI> = props => {
	return (
		<button
			key={props.index}
			data-is-current={props.currentImage === props.index}
			onClick={() => props.setCurrentImage(props.index)}
			className={style.imageSelectorButton}>
			<Image
				className={style.selectorImage}
				src={props.image?.url ? props.image?.url : mainImage}
				alt={'image'}
				width={300}
				height={300}
				priority={true}
			/>
			{props.currentImage === props.index && (
				<motion.div
					layoutId={'currentImage'}
					transition={{
						...getSpringTransition(20, 70),
					}}
					className={style.imageSelectorBorder}
				/>
			)}
		</button>
	)
}

export default memo(ImageSelector)
