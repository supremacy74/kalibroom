import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface ProductsCategoryProps {}

const ProductsCategory: NextPage<
	ProductsCategoryProps
> = props => {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>
					Kalibroom — {router.query.productsCategory}
				</title>
			</Head>
			<main>

			</main>
		</>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default memo(ProductsCategory)
