import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductPage.module.scss'
import Content from '@/main/1modules/ProductPage/Content/Content'
import { useEffect } from 'react'
import { pathT, setPaths } from '@/store/reducers/paths'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import PopupSelectMaterial from '@/main/3ui/Popups/PopupSelectMaterial'
import PopupSizes from '@/main/3ui/Popups/PopupSizes'
import { productI } from '@/interfaces/product'
import { setCurrentProduct } from '@/store/reducers/products/productPage'
import { getProductByIdOrSlug } from '@/data/apiController'

const ProductPage: NextPage = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const currentPage = useAppSelector(state => state.productPage.currentProduct)

	const setterCurrentProduct = (data: productI | null) => {
		dispatch(setCurrentProduct(data))
	}

	useEffect(() => {
		setterCurrentProduct(null)
	}, [])

	useEffect(() => {
		const { product } = router.query
		if (typeof product === 'string') {
			getProductByIdOrSlug(setterCurrentProduct, product)
		}
	}, [router])

	useEffect(() => {
		if (currentPage && currentPage.name) {
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
					url: `/products/${currentPage.category_id}`,
					label: 'category',
				},
				{
					url: `/products/${
						currentPage.category_id
					}/${currentPage.name.toLowerCase()}`,
					label: `${currentPage.name}`,
				},
			]

			dispatch(setPaths(paths))
		}
	}, [currentPage])

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
