import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'

interface ProductsProps {}

const Products: NextPage<ProductsProps> = props => {
	return (
		<>
			<Head>
				<title>Kalibroom — Товары</title>
			</Head>
			<main>

			</main>
		</>
	)
}

Products.displayName = 'Products'
export default memo(Products)
