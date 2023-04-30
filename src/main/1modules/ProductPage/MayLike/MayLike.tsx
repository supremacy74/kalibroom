import {FC, memo, useEffect, useState} from 'react'
import style from './MayLike.module.scss'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'
import {useAppSelector} from "@/store/hooks";
import {getAllProducts} from "@/data/apiController";
import {productI} from "@/interfaces/product";
import ContainerForCells from "@/main/1modules/ContainerForCells/ContainerForCells";

interface MayLikeProps {

}

const MayLike: FC<MayLikeProps> = () => {
	const currentProduct = useAppSelector(state => state.productPage.currentProduct)
	const [products, setProducts] = useState<productI[]>([])

	const loadMore = () => {
		// setArray(prev => [...prev, ...arrayOfProducts])
	}

	useEffect(() => {
		getAllProducts(setProducts, 40, 0)
	}, [])

  return (
    <div className={style.mayLike}>
			<h3 className={style.title}>
				Вам также может понравиться
			</h3>
			<ContainerForCells array={products.filter(item => item.category_id === currentProduct?.category_id)} />
			<LoadMoreButton onClick={loadMore} />
		</div>
  )
}

MayLike.displayName = 'MayLike'
export default memo(MayLike)