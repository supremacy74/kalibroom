import { NextPage } from 'next'
import { memo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Main from "@/main/3ui/Main/Main";

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
			<Main>

			</Main>
		</>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default memo(ProductsCategory)
