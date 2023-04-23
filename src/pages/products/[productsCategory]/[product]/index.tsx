import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductPage.module.scss'
import Content from '@/main/1modules/ProductPage/Content/Content'
import { useEffect } from 'react'
import { pathT, setPaths } from '@/store/reducers/paths'
import { useAppDispatch } from '@/store/hooks'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import PopupSelectMaterial from '@/main/3ui/Popups/PopupSelectMaterial'
import PopupSizes from '@/main/3ui/Popups/PopupSizes'

interface ProductProps {}

const ProductPage: NextPage<ProductProps> = () => {
	const router = useRouter()
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
			{
				url: `/products/${arrayOfProducts[0].category_id}`,
				label: 'category',
			},
			{
				url: `/products/${
					arrayOfProducts[0].category_id
				}/${arrayOfProducts[0].name.toLowerCase()}`,
				label: `${arrayOfProducts[0].name}`,
			},
		]

		dispatch(setPaths(paths))
	}, [])

	return (
		<>
			<Head>
				<title>Kalibroom — {router.query.product}</title>
			</Head>
			<Main className={style.main}>
				<Content />

				<PopupSelectMaterial />
				<PopupSizes />
			</Main>
		</>
	)
}

ProductPage.displayName = 'Product'
export default ProductPage
