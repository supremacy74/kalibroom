import { FC, memo } from 'react'
import style from './styles/RelatedProducts.module.scss'
import Product from '@/main/2components/Product/Product'
import { arrayOfProducts } from '@/data/arrayOfProducts'

interface RelatedProductsProps {}

const RelatedProducts: FC<RelatedProductsProps> = props => {
	const products = [1, 2, 3, 4]

	return (
		<div className={style.relatedProducts}>
			<h3 className={style.title}>Сопутствующие товары</h3>
			<main className={style.main}>
				{products.map((value, index) => {
					return (
						<Product key={index} product={arrayOfProducts[index]} />
					)
				})}
			</main>
		</div>
	)
}

RelatedProducts.displayName = 'RelatedProducts'
export default memo(RelatedProducts)
