import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductCategory.module.scss'
import WrapperInner from '@/main/3ui/WrapperInner/WrapperInner'
import Link from 'next/link'
import { arrayOfCategories } from '@/data/arrayOfCategories'

interface ProductsCategoryProps {}

const ProductsCategory: NextPage<
	ProductsCategoryProps
> = props => {
	const router = useRouter()

	const currentPageRoute = arrayOfCategories.find(
		val => val.slug === router.query.productsCategory
	)

	return (
		<>
			<Head>
				<title>
					Kalibroom — {router.query.productsCategory}
				</title>
			</Head>
			<Main className={style.main}>
				<div className={style.breadCrumbs}>
					<Link className={style.breadCrumb} href={'/'}>
						главная
					</Link>
					/
					<Link
						className={style.breadCrumb}
						href={'/products'}>
						товары
					</Link>
					/
					<Link
						className={style.breadCrumb}
						href={
							currentPageRoute
								? `/products/${currentPageRoute.slug}`
								: ''
						}>
						{currentPageRoute?.title}
					</Link>
				</div>
			</Main>
		</>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default memo(ProductsCategory)
