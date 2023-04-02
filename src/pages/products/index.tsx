import { NextPage } from 'next'
import Head from 'next/head'
import style from '@/styles/products/Products.module.scss'
import Main from '@/main/3ui/Main/Main'
import { arrayOfCategories } from '@/data/arrayOfCategories'
import CategoryField from '@/main/1modules/CategoryField/CategoryField'

interface ProductsProps {}

const Products: NextPage<ProductsProps> = props => {
	return (
		<>
			<Head>
				<title>Kalibroom — Товары</title>
			</Head>
			<Main>
				<div className={style.content}>
					{arrayOfCategories.map(category => {
						return (
							<CategoryField
								key={category.id}
								category={category}
							/>
						)
					})}
				</div>
			</Main>
		</>
	)
}

Products.displayName = 'Products'
export default Products
