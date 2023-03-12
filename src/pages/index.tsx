import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import {memo, useEffect, useState} from 'react'
import Hero from '@/main/1modules/Hero/Hero'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import { arrayOfProducts1 } from '@/data/arrayOfProducts1'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'
import { setProducts } from '@/store/reducers/products'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'

const Home: NextPage = () => {
	const [productsSelected, handleProductsSelected] =
		useState<boolean>(false)
	const [ideasSelected, handleIdeasSelected] =
		useState<boolean>(false)

	const products = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()

	const loadMoreProducts = () => {
		dispatch(
			setProducts([...products, ...arrayOfProducts1])
		)
	}

	return (
		<>
			<Head>
				<title>Kalibroom — Главная</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={style.main}>
				<Hero
					productsSelected={productsSelected}
					handleProductsSelected={handleProductsSelected}
					ideasSelected={ideasSelected}
					handleIdeasSelected={handleIdeasSelected}
				/>
				<div className={style.content}>
					<ContainerForCells array={products} />
					<LoadMoreButton
						onClick={() => loadMoreProducts()}
					/>
				</div>
			</main>
		</>
	)
}

Home.displayName = 'Home'
export default memo(Home)
