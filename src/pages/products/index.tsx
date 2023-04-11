import { NextPage } from 'next'
import Head from 'next/head'
import style from '@/styles/products/Products.module.scss'
import Main from '@/main/3ui/Main/Main'
import { arrayOfCategories } from '@/data/arrayOfCategories'
import CategoryField from '@/main/1modules/CategoryField/CategoryField'
import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'
import { pathT, setPaths } from '@/store/reducers/paths'

const Products: NextPage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const paths: pathT[] = [
			{
				url: '/',
				label: 'главная',
			},
			{
				url: `/products`,
				label: 'товары',
			},
		]

		dispatch(setPaths(paths))
	}, [])

	return (
		<>
			<Head>
				<title>Kalibroom — Товары</title>
			</Head>
			<Main className={style.main}>
				<div className={style.content}>
					{arrayOfCategories.map(category => {
						return <CategoryField key={category.id} category={category} />
					})}
				</div>
			</Main>
		</>
	)
}

Products.displayName = 'Products'
export default Products
