import Head from 'next/head'
import style from '@/styles/Home.module.scss'
import { NextPage } from 'next'
import { memo, useState } from 'react'
import Hero from '@/main/1modules/Hero/Hero'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import { products } from '@/data/products'

const Home: NextPage = () => {
	const [productsSelected, handleProductsSelected] =
		useState<boolean>(false)
	const [ideasSelected, handleIdeasSelected] =
		useState<boolean>(false)

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
				</div>
			</main>
		</>
	)
}

Home.displayName = 'Home'
export default memo(Home)
