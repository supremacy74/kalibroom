import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductCategory.module.scss'

const ProductsCategory: NextPage = () => {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>
					Kalibroom — {router.query.productsCategory}
				</title>
			</Head>
			<Main className={style.main}>

			</Main>
		</>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default ProductsCategory
