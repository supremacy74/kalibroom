import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import { memo, useState } from 'react'
import Hero from '@/main/1modules/Hero/Hero'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import { arrayOfProducts1 } from '@/data/arrayOfProducts1'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'
import { setProducts } from '@/store/reducers/products'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import Main from '@/main/3ui/Main/Main'

const Home: NextPage = () => {
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
			<Main>
				<Hero />
				<div className={style.content}>
					<ContainerForCells array={products} />
					<LoadMoreButton
						onClick={() => loadMoreProducts()}
					/>
				</div>
			</Main>
		</>
	)
}

Home.displayName = 'Home'
export default memo(Home)
