import { NextPage } from 'next'
import { FC, memo } from 'react'
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
} from '@/helpers/importIcons'

interface ProductProps {}

const Product: NextPage<ProductProps> = props => {
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
		<div className={style.content}>
			<MainContent />
		</div>
	)
}

const MainContent: FC = () => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<div className={style.mainContent}>
			<div className={style.contentWithImage}>
				<div className={style.imagesSelector}></div>
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
						<button
							className={style.imageBlockButton}>
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
						<button
							className={style.imageBlockButton}>
							<span className={style.imageBlockText}>
								Инструкция по сборке
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
					</div>
				</div>
			</div>
		</div>
	)
}

Product.displayName = 'Product'
export default memo(Product)
