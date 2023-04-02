import { NextPage } from 'next'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductPage.module.scss'
import Image from 'next/image'
import { useAppSelector } from '@/store/hooks'
import {
	cubeDarkIcon,
	cubeIcon,
	increaseDarkIcon,
	increaseIcon,
	instructionDarkIcon,
	instructionIcon,
	questionIcon,
} from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import WrapperInner from '@/main/3ui/WrapperInner/WrapperInner'
import { productI } from '@/interfaces/product'

interface ProductProps {}

const Product: NextPage<ProductProps> = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Kalibroom — {router.query.product}</title>
			</Head>
			<Main className={style.main}>
				<Header />
				<Content />
			</Main>
		</>
	)
}

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div
				className={`${style.headerPart} ${style.headerLeftPart}`}></div>
			<div
				className={`${style.headerPart} ${style.headerRightPart}`}></div>
		</header>
	)
}

const Content: FC = () => {
	return (
		<WrapperInner className={style.content}>
			<MainContent />
		</WrapperInner>
	)
}

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
					{arrayOfButtons.map((image, index) => {
						return (
							<button
								key={index}
								onClick={() => setCurrentImage(index)}
								className={style.imageSelectorButton}>
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
					})}
				</div>
				<div className={style.imageBlock}>
					<div className={style.currentImage}></div>
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
							<span className={style.priceWithoutDiscount}>
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
		</div>
	)
}

interface colorAndMaterialI {
	product: productI
}

const ColorAndMaterial: FC<colorAndMaterialI> = props => {
	return (
		<div className={style.colorAndMaterial}>
			
		</div>
	)
}

Product.displayName = 'Product'
export default Product
