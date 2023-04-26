import { FC, memo, useState } from 'react'
import style from './MainLeftPart.module.scss'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import Skeleton from '@/main/3ui/Skeleton/Skeleton'
import {
	cubeDarkIcon,
	cubeIcon,
	increaseDarkIcon,
	increaseIcon,
	instructionDarkIcon,
	instructionIcon,
} from '@/helpers/importIcons'
import { useAppSelector } from '@/store/hooks'

interface MainLeftPartProps {}

const MainLeftPart: FC<MainLeftPartProps> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const [currentImage, setCurrentImage] =
		useState<number>(0)

	return (
		<div className={style.contentWithImage}>
			<div className={style.imagesSelector}>
				{arrayOfProducts[0].images.map(
					(image, index) => {
						return (
							<button
								key={index}
								data-is-current={currentImage === index}
								onClick={() => setCurrentImage(index)}
								className={style.imageSelectorButton}>
								<Image
									className={style.selectorImage}
									src={image.imageURL}
									alt={'image'}
									width={300}
									height={300}
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
					}
				)}
			</div>
			<div className={style.imageBlock}>
				<div className={style.currentImageWrapper}>
					<Skeleton className={style.skeleton} />
					<Image
						className={style.currentImage}
						src={
							arrayOfProducts[0].images[
								currentImage
							].imageURL
						}
						alt={'current image'}
						width={2000}
						height={2000}
						quality={90}
					/>
				</div>
				<div className={style.imageBlockButtons}>
					<button className={style.imageBlockButton}>
						<span className={style.imageBlockText}>
							Увеличить
						</span>
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
						<span className={style.imageBlockText}>
							Посмотреть в 3D
						</span>
						{!theme && (
							<Image
								className={style.imageBlockIcon}
								src={cubeIcon}
								alt={'cubeIcon'}
							/>
						)}
						{theme && (
							<Image
								className={style.imageBlockIcon}
								src={cubeDarkIcon}
								alt={'cubeDarkIcon'}
							/>
						)}
					</button>
					<button className={style.imageBlockButton}>
						<span className={style.imageBlockText}>
							Инструкция по сборке
						</span>
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
}

MainLeftPart.displayName = 'MainLeftPart'
export default memo(MainLeftPart)
