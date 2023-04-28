import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'
import { setProducts } from '@/store/reducers/products/products'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Main from '@/main/3ui/Main/Main'
import { useEffect } from 'react'
import { setPaths } from '@/store/reducers/paths'
import Title from '@/main/3ui/Title/Title'
import { getAllProducts } from '@/data/apiController'
import { productI } from '@/interfaces/product'
import Button from '@/main/3ui/Buttons/Button/Button'

const Home: NextPage = () => {
	const products = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	const loadMoreProducts = () => {
		// dispatch(setProducts([...products, ...arrayOfProducts]))
	}

	const setterProducts = (data: productI[]) => {
		dispatch(setProducts(data))
		console.log(data)
	}

	const getInitialProducts = () => {
		getAllProducts(setterProducts)
	}

	useEffect(() => {
		dispatch(setPaths([]))
		getInitialProducts()
	}, [])

	return (
		<>
			<Head>
				<title>Kalibroom — Главная</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				<div className={style.contents}>
					<div className={style.contentBlock}>
						<div className={style.content}>
							<Title>Товары</Title>
							<ContainerForCells array={products} />
						</div>
						<Button
							type={'flat'}
							onClick={() => {}}
							width={'min(100%, 42rem)'}
							className={style.loadMoreButton}
							disabled={false}>
							Загрузить ещё
						</Button>
					</div>
					<div className={style.contentBlock}>
						<div className={style.content}>
							<Title>Идеи</Title>
							<ContainerForCells array={products} />
						</div>
						<Button
							type={'flat'}
							onClick={() => {}}
							width={'min(100%, 42rem)'}
							className={style.loadMoreButton}
							disabled={false}>
							Загрузить ещё
						</Button>
					</div>
				</div>
			</Main>
		</>
	)
}

Home.displayName = 'Home'
export default Home
