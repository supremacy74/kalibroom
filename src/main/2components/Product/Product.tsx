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
import { getSpringTransition } from '@/helpers/animations'
import { productV } from '@/main/2components/Product/styles/variants'

interface ProductProps {
	image?: string
	price: string
	title: string
	category: string
}

const Product: FC<ProductProps> = props => {
	const [isActive, handleActive] = useState<boolean>(false)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		setHeight(Math.ceil(Math.random() * 20) + 10)
	}, [])

	return (
		<motion.div
			variants={productV}
			transition={getSpringTransition(10, 60)}
			initial={'off'}
			whileInView={'on'}
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
				{props.image ? (
					<Image
						className={style.image}
						src={props.image}
						alt={'productImage'}
					/>
				) : (
					<div
						style={{
							height: `${height}rem`,
						}}
						className={style.imageNotFound}>
						image not found
					</div>
				)}
			</motion.div>
			<Link href={''} className={style.bottom}>
				<div className={style.text}>
					<div className={style.title}>{props.title}</div>
					<div className={style.category}>
						{props.category}
					</div>
				</div>
				<div className={style.price}>{props.price}</div>
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
