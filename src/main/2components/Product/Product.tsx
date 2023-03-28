import {
	Dispatch,
	FC,
	memo,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import style from './styles/Product.module.scss'
import Image from 'next/image'
import CircleButton from '@/main/3ui/CircleButton/CircleButton'
import {
	cartActiveIcon,
	cartHoverIcon,
	cartIcon,
	heartDarkIcon,
} from '@/helpers/importIcons'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { inViewAnimation } from '@/helpers/animations'
import { productI } from '@/interfaces/product'
import ImageNotFoundBlock from '@/main/3ui/ImageNotFoundBlock/ImageNotFoundBlock'
import Skeleton from '@/main/3ui/Skeleton/Skeleton'

interface ProductProps {
	product: productI
}

const Product: FC<ProductProps> = props => {
	const [isActive, handleActive] = useState<boolean>(false)
	const [currentImage, setCurrentImage] =
		useState<number>(0)
	const [isLoaded, handleIsLoaded] =
		useState<boolean>(false)

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
				data-is-loaded={isLoaded}
				className={style.imageWrapper}>
				<Skeleton />
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
		</motion.div>
	)
}

interface ImagesI {
	product: productI
	currentImage: number
	isLoaded: boolean
	handleIsLoaded: Dispatch<SetStateAction<boolean>>
}

const Images: FC<ImagesI> = props => {
	const [height, setHeight] = useState(0)

	useEffect(() => {
		setHeight(Math.ceil(Math.random() * 20) + 10)
	}, [])

	return (
		<>
			{props.product.images.length ? (
				<>
					{props.product.images.map((image, index) => {
						return (
							<AnimatePresence>
								{props.currentImage === index && (
									<motion.div
										data-is-loaded={props.isLoaded}
										className={style.innerImageWrapper}>
										<Image
											onLoad={() =>
												props.handleIsLoaded(true)
											}
											className={style.image}
											src={image.imageURL}
											alt={'productImage'}
											width={800}
											height={1200}
										/>
									</motion.div>
								)}
							</AnimatePresence>
						)
					})}
				</>
			) : (
				<ImageNotFoundBlock height={`${height}rem`} />
			)}
		</>
	)
}

interface BottomI {
	product: productI
	isActive: boolean
	handleIsActive: Dispatch<SetStateAction<boolean>>
}

const Bottom: FC<BottomI> = props => {
	return (
		<>
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
				isActive={props.isActive}
				handleActive={props.handleIsActive}
			/>
		</>
	)
}

interface ImageLayoutI {
	isActive: boolean
	handleActive: Dispatch<SetStateAction<boolean>>
	setCurrentImage: Dispatch<SetStateAction<number>>
	handleIsLoaded: Dispatch<SetStateAction<boolean>>
	product: productI
	currentImage: number
}

const ImageLayout: FC<ImageLayoutI> = props => {
	return (
		<div className={style.imageLayout}>
			<CircleButton
				className={style.cartButton}
				icon={cartIcon}
				hoverIcon={cartHoverIcon}
				activeIcon={cartActiveIcon}
				isActive={props.isActive}
				handleActive={props.handleActive}
			/>
			<button className={style.heartButton}>
				<Image src={heartDarkIcon} alt={'heartDarkIcon'} />
			</button>
			<div className={style.pagination}>
				{props.product.images.map((value, index) => {
					return (
						<div
							key={index}
							style={
								props.currentImage === index
									? {
											background: 'var(--colorBackground)',
									  }
									: {}
							}
							onClick={() => {
								props.setCurrentImage(index)
								props.handleIsLoaded(false)
							}}
							className={style.paginationDot}
						/>
					)
				})}
			</div>
		</div>
	)
}

Product.displayName = 'Product'
export default memo(Product)
