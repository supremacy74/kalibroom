import { FC, memo, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/router'
import style from './styles/MainContent.module.scss'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import Image from 'next/image'
import {
	cubeDarkIcon,
	cubeIcon,
	increaseDarkIcon,
	increaseIcon,
	instructionDarkIcon,
	instructionIcon,
	questionIcon,
} from '@/helpers/importIcons'
import Properties from '@/main/1modules/ProductPage/Properties/Properties'
import { arrayOfProductsExtended } from '@/data/arrayOfProducts'
import Skeleton from "@/main/3ui/Skeleton/Skeleton";

const MainContent: FC = () => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const [currentImage, setCurrentImage] =
		useState<number>(0)

	const arrayOfButtons = [1, 2, 3, 4]

	const router = useRouter()

	return (
		<div className={style.mainContent}>
			<div className={style.contentWithImage}>
				<div className={style.imagesSelector}>
					{arrayOfProductsExtended[0].images.map(
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
								arrayOfProductsExtended[0].images[
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
			<div className={style.mainContentRightPart}>
				<div className={style.contentWithText}>
					<div className={style.top}>
						<h3 className={style.title}>
							{router.query.product}
						</h3>
						<p className={style.category}>category</p>
					</div>
					<div className={style.pricePart}>
						<div className={style.pricePartTop}>
							<div className={style.price}>
								<span className={style.currentPrice}>
									19 790 ₽
								</span>
								<span
									className={style.priceWithoutDiscount}>
									24 990 ₽
								</span>
							</div>
							<div className={style.installmentPlan}>
								<span className={style.installmentPlanText}>
									2 175P/месяц Рассрочка
								</span>
								<button className={style.questionButton}>
									<Image
										className={style.questionIcon}
										src={questionIcon}
										alt={'questionIcon'}
									/>
								</button>
							</div>
						</div>
						<div className={style.pricePartButtons}>
							<button className={style.buyButton}>
								В корзину
							</button>
							<button className={style.buyOneClickButton}>
								Купить в 1 клик
							</button>
						</div>
					</div>
				</div>
				<Properties />
			</div>
		</div>
	)
}

MainContent.displayName = 'MainContent'
export default memo(MainContent)
