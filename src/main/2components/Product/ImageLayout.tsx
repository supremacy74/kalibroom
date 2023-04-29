import { Dispatch, FC, memo, SetStateAction } from 'react'
import { productI } from '@/interfaces/product'
import style from '@/main/2components/Product/Product.module.scss'
import CircleButton from '@/main/3ui/CircleButton/CircleButton'
import {
	cartActiveIcon,
	cartHoverIcon,
	cartIcon,
	downloadIcon,
	heartDarkIcon,
	scoreIcon,
} from '@/helpers/importIcons'
import Image from 'next/image'
import Link from 'next/link'

interface ImageLayoutI {
	isActive: boolean
	handleActive: Dispatch<SetStateAction<boolean>>
	setCurrentImage: Dispatch<SetStateAction<number>>
	handleIsLoaded: Dispatch<SetStateAction<boolean>>
	product: productI
	currentImage: number
}

const ImageLayout: FC<ImageLayoutI> = props => {
	const handleImageLeft = async () => {
		if (props.currentImage > 0) {
			props.setCurrentImage(prev => prev - 1)
		} else if (props.product.fore_images) {
			props.setCurrentImage(props.product.fore_images.length - 1)
		}
		props.handleIsLoaded(false)
	}

	const handleImageRight = async () => {
		if (
			props.product.fore_images &&
			props.currentImage < props.product.fore_images.length - 1
		) {
			props.setCurrentImage(prev => prev + 1)
		} else {
			props.setCurrentImage(0)
		}
		props.handleIsLoaded(false)
	}

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
			{props.product.fore_images && props.product.fore_images.length ? (
				<>
					<button
						onClick={() => handleImageLeft()}
						className={style.layoutLeftButton}
					/>
					<button
						onClick={() => handleImageRight()}
						className={style.rightLeftButton}
					/>
				</>
			) : null}
			<button className={style.heartButton}>
				<Image src={heartDarkIcon} alt={'heartDarkIcon'} />
			</button>
			{props.product.model_3d && (
				<Link
					className={style.model}
					href={props.product.model_3d}>
					<span className={style.modelText}>3D</span>
					<Image src={downloadIcon} alt={'downloadIcon'} />
				</Link>
			)}
			{props.product.materials && (
				<div className={style.scores}>
					<Image src={scoreIcon} alt={'scoreIcon'} />
					<span className={style.scoreText}>{props.product.materials.length}</span>
				</div>
			)}
			<div className={style.pagination}>
				{props.product.fore_images &&
					props.product.fore_images.map((value, index) => {
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

export default ImageLayout
