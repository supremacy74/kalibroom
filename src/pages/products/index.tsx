import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import Hero from '@/main/1modules/Hero/Hero'
import style from '@/styles/products/ProductPage.module.scss'
import Main from '@/main/3ui/Main/Main'

interface ProductsProps {}

const Products: NextPage<ProductsProps> = props => {
	return (
		<>
			<Head>
				<title>Kalibroom — Товары</title>
			</Head>
			<Main>
				{/*<Hero />*/}
				<div className={style.content}>

				</div>
			</Main>
		</>
	)
}

Products.displayName = 'Products'
export default memo(Products)
