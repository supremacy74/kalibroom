import { FC, memo } from 'react'
import style from './RelatedProducts.module.scss'
import Product from '@/main/2components/Product/Product'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import {useAppSelector} from "@/store/hooks";

interface RelatedProductsProps {}

const RelatedProducts: FC<RelatedProductsProps> = props => {
	const products = [1, 2, 3, 4]
	const currentProduct = useAppSelector(state => state.productPage.currentProduct)

	return (
		currentProduct && (
			<div className={style.relatedProducts}>
				<h3 className={style.title}>Сопутствующие товары</h3>
				<main className={style.main}>
					{products.map((value, index) => {
						return (
							<Product key={index} product={currentProduct} />
						)
					})}
				</main>
			</div>
		)
	)
}

RelatedProducts.displayName = 'RelatedProducts'
export default memo(RelatedProducts)
