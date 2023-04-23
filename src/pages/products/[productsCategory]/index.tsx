import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductCategory.module.scss'
import RadioHandler from '@/main/3ui/Buttons/Handler/Handler'
import { useState } from 'react'

const ProductsCategory: NextPage = () => {
	const router = useRouter()

	const [handler, handleHandler] = useState(false)

	return (
		<>
			<Head>
				<title>Kalibroom — {router.query.productsCategory}</title>
			</Head>
			<Main className={style.main}>
				category
				<RadioHandler
					value={handler}
					onChange={() => handleHandler(prev => !prev)}
					name={'handler'}
				/>
			</Main>
		</>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default ProductsCategory
