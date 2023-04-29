import { FC, memo } from 'react'
import WrapperInner from '@/main/3ui/WrapperInner/WrapperInner'
import style from './Content.module.scss'
import Description from '@/main/1modules/ProductPage/Description/Description'
import MainLeftPart from '@/main/1modules/ProductPage/MainLeftPart/MainLeftPart'
import MainRightPart from '@/main/1modules/ProductPage/MainRightPart/MainRightPart'
import Reviews from '@/main/1modules/ProductPage/Reviews/Reviews'
import RelatedProducts from '@/main/1modules/ProductPage/RelatedProducts/RelatedProducts'
import OurFurniture from '@/main/1modules/ProductPage/OurFurniture/OurFurniture'
import MayLike from '@/main/1modules/ProductPage/MayLike/MayLike'
import { useAppSelector } from '@/store/hooks'

const Content: FC = () => {
	const currentProduct = useAppSelector(
		state => state.productPage.currentProduct
	)

	return (
		<WrapperInner className={style.content}>
			<main className={style.main}>
				<MainLeftPart />
				<MainRightPart />
				{currentProduct?.description && (
					<Description>{currentProduct.description}</Description>
				)}
			</main>
			<Reviews />
			<RelatedProducts />
			<OurFurniture />
			<MayLike />
		</WrapperInner>
	)
}

export default memo(Content)
