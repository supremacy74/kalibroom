import { FC, memo, useEffect, useState } from 'react'
import style from './styles/Product.module.scss'
import Image from 'next/image'
import CircleButton from '@/main/3ui/CircleButton/CircleButton'
import {
	cartActiveIcon,
	cartHoverIcon,
	cartIcon,
	heartDarkIcon,
} from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { inViewAnimation } from '@/helpers/animations'
import { productI } from '@/interfaces/product'
import ImageNotFoundBlock from '@/main/3ui/ImageNotFoundBlock/ImageNotFoundBlock'

interface ProductProps {
	product: productI
}

const Product: FC<ProductProps> = props => {
	const [isActive, handleActive] = useState<boolean>(false)
	const [height, setHeight] = useState(0)
	const [currentImage, setCurrentImage] =
		useState<number>(0)

	useEffect(() => {
		setHeight(Math.ceil(Math.random() * 20) + 10)
	}, [])

	return (
		<motion.div
			{...inViewAnimation}
			className={style.product}>
			<motion.div
				animate={
					isActive
						? { outline: '#c0ff0d solid 2px' }
						: { outline: '#c0ff0d00 solid 2px' }
				}
				className={style.imageWrapper}>
				<CircleButton
					className={style.cartButton}
					icon={cartIcon}
					hoverIcon={cartHoverIcon}
					activeIcon={cartActiveIcon}
					isActive={isActive}
					handleActive={handleActive}
				/>
				<button className={style.heartButton}>
					<Image
						src={heartDarkIcon}
						alt={'heartDarkIcon'}
					/>
				</button>
				{props.product.images.length ? (
					<>
						<Image
							className={style.image}
							src={
								props.product.images[currentImage].imageURL
							}
							alt={'productImage'}
							width={800}
							height={1200}
						/>
						<div className={style.pagination}>
							{props.product.images.map((value, index) => {
								return (
									<div
										key={index}
										style={
											currentImage === index
												? {
														background:
															'var(--colorBackground)',
												  }
												: {}
										}
										onClick={() => {
											setCurrentImage(index)
										}}
										className={style.paginationDot}
									/>
								)
							})}
						</div>
					</>
				) : (
					<ImageNotFoundBlock height={`${height}rem`} />
				)}
			</motion.div>
			<Link href={''} className={style.bottom}>
				<div className={style.text}>
					<div className={style.title}>
						{props.product.title}
					</div>
					<div className={style.category}>
						{props.product.categoryId}
					</div>
				</div>
				<div className={style.price}>
					{props.product.price}
				</div>
			</Link>
			<CircleButton
				className={style.cartButtonMobile}
				icon={cartIcon}
				hoverIcon={cartHoverIcon}
				activeIcon={cartActiveIcon}
				isActive={isActive}
				handleActive={handleActive}
			/>
		</motion.div>
	)
}

Product.displayName = 'Product'
export default memo(Product)
