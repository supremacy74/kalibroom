import { FC, memo, ReactNode, useEffect, useState } from 'react'
import style from './MainLeftPart.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import Skeleton from '@/main/3ui/Skeleton/Skeleton'
import {
	downloadDarkIcon,
	downloadIcon,
	increaseDarkIcon,
	increaseIcon,
	instructionDarkIcon,
	instructionIcon,
} from '@/helpers/importIcons'
import { useAppSelector } from '@/store/hooks'
import { mainImage } from '@/helpers/importImages'
import { imageI } from '@/interfaces/product'

interface MainLeftPartProps {}

const MainLeftPart: FC<MainLeftPartProps> = props => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)
	const currentProduct = useAppSelector(
		state => state.productPage.currentProduct
	)
	const currentMaterial = useAppSelector(
		state => state.productPage.currentMaterial
	)
	const currentMaterialColor = useAppSelector(
		state => state.productPage.currentMaterialColor
	)

	const [currentImage, setCurrentImage] = useState<number>(0)
	const [images, setImages] = useState<imageI[]>([])

	useEffect(() => {
		console.log(currentProduct?.fore_images)
	}, [currentProduct])

	useEffect(() => {
		getImages()
	}, [currentMaterial])

	const getImages = () => {
		setCurrentImage(0)
		if (currentProduct && currentProduct.fore_images && currentMaterial) {
			setImages(
				currentProduct.fore_images.filter(
					image => image.material_id === currentMaterial.id
				)
			)
		}
	}

	return (
		currentProduct && (
			<div className={style.contentWithImage}>
				<div className={style.imagesSelector}>
					{images.length ? (
						images.map((image, index) => {
							return (
								<button
									key={index}
									data-is-current={currentImage === index}
									onClick={() => setCurrentImage(index)}
									className={style.imageSelectorButton}>
									<Image
										className={style.selectorImage}
										src={image?.url ? image?.url : mainImage}
										alt={'image'}
										width={300}
										height={300}
										priority={true}
									/>
									{currentImage === index && (
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
						})
					) : (
						<div className={style.imageSelectorButton} />
					)}
				</div>
				<div className={style.imageBlock}>
					<div className={style.currentImageWrapper}>
						<Skeleton className={style.skeleton} />
						<Image
							className={style.currentImage}
							src={images ? images[currentImage]?.url : mainImage}
							alt={'current image'}
							width={2000}
							height={2000}
							quality={90}
						/>
					</div>
					<div className={style.imageBlockButtons}>
						<button className={style.imageBlockButton}>
							<span className={style.imageBlockText}>Увеличить</span>
							{!theme && (
								<Image
									className={style.imageBlockIcon}
									src={increaseIcon}
									alt={'increaseIcon'}
								/>
							)}
							{theme && (
								<Image
									className={style.imageBlockIcon}
									src={increaseDarkIcon}
									alt={'increaseDarkIcon'}
								/>
							)}
						</button>
						<button className={style.imageBlockButton}>
							<span className={style.imageBlockText}>3D модель</span>
							{!theme && (
								<Image
									className={style.imageBlockIcon}
									src={downloadIcon}
									alt={'downloadIcon'}
								/>
							)}
							{theme && (
								<Image
									className={style.imageBlockIcon}
									src={downloadDarkIcon}
									alt={'downloadDarkIcon'}
								/>
							)}
						</button>
						<button className={style.imageBlockButton}>
							<span className={style.imageBlockText}>Инструкция по сборке</span>
							{!theme && (
								<Image
									className={style.imageBlockIcon}
									src={instructionIcon}
									alt={'instructionIcon'}
								/>
							)}
							{theme && (
								<Image
									className={style.imageBlockIcon}
									src={instructionDarkIcon}
									alt={'instructionDarkIcon'}
								/>
							)}
						</button>
					</div>
				</div>
			</div>
		)
	)
}

MainLeftPart.displayName = 'MainLeftPart'
export default memo(MainLeftPart)
