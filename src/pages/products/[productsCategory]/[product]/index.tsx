import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductPage.module.scss'
import Content from "@/main/1modules/ProductPage/Content/Content";

interface ProductProps {}

const ProductPage: NextPage<ProductProps> = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Kalibroom — {router.query.product}</title>
			</Head>
			<Main className={style.main}>
				<Content />
			</Main>
		</>
	)
}

ProductPage.displayName = 'Product'
export default ProductPage
