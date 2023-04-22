import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'
import { setProducts } from '@/store/reducers/products'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Main from '@/main/3ui/Main/Main'
import { useEffect } from 'react'
import { setPaths } from '@/store/reducers/paths'
import Title from "@/main/3ui/Title/Title";

const Home: NextPage = () => {
	const products = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	const loadMoreProducts = () => {
		dispatch(setProducts([...products, ...arrayOfProducts]))
	}

	useEffect(() => {
		dispatch(setPaths([]))
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
							<Title>
								Товары
							</Title>
							<ContainerForCells array={products} />
						</div>
						<LoadMoreButton onClick={() => loadMoreProducts()} />
					</div>
					<div className={style.contentBlock}>
						<div className={style.content}>
							<Title>
								Идеи
							</Title>
							<ContainerForCells array={products} />
						</div>
						<LoadMoreButton onClick={() => loadMoreProducts()} />
					</div>
				</div>
			</Main>
		</>
	)
}

Home.displayName = 'Home'
export default Home
