import { FC, memo, useState } from 'react'
import style from './styles/Product.module.scss'
import { motion } from 'framer-motion'
import { getSpringTransition, inViewAnimation } from '@/helpers/animations'
import { productI } from '@/interfaces/product'
import Skeleton from '@/main/3ui/Skeleton/Skeleton'
import Bottom from '@/main/2components/Product/Bottom'
import Images from '@/main/2components/Product/Images'
import ImageLayout from '@/main/2components/Product/ImageLayout'

interface ProductProps {
	product: productI
}

const Product: FC<ProductProps> = props => {
	const [isActive, handleActive] = useState<boolean>(false)
	const [currentImage, setCurrentImage] = useState<number>(0)
	const [isLoaded, handleIsLoaded] = useState<boolean>(false)

	return (
		<div className={style.product}>
			<motion.div
				animate={isLoaded ? { height: 'auto' } : { height: '10rem' }}
				data-is-active={isActive}
				transition={{
					...getSpringTransition(20, 50, -1),
					delay: 0.2,
				}}
				className={style.imageWrapper}>
				<Skeleton className={style.skeleton} />
				<ImageLayout
					isActive={isActive}
					handleActive={handleActive}
					setCurrentImage={setCurrentImage}
					handleIsLoaded={handleIsLoaded}
					product={props.product}
					currentImage={currentImage}
				/>
				<Images
					product={props.product}
					currentImage={currentImage}
					isLoaded={isLoaded}
					handleIsLoaded={handleIsLoaded}
				/>
			</motion.div>
			<Bottom
				handleIsActive={handleActive}
				isActive={isActive}
				product={props.product}
			/>
		</div>
	)
}

Product.displayName = 'Product'
export default memo(Product)
