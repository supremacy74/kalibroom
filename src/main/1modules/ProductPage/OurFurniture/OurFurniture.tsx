import { FC, memo } from 'react'
import style from './OurFurniture.module.scss'
import ArraySlider from '@/main/2components/ArraySlider/ArraySlider'
import Image from 'next/image'
import { useAppSelector } from '@/store/hooks'

interface OurFurnitureProps {}

const OurFurniture: FC<OurFurnitureProps> = () => {
	const currentProduct = useAppSelector(
		state => state.productPage.currentProduct
	)

	return (
		<>
			{currentProduct && currentProduct.interior_images?.length ? (
				<ArraySlider
					title={'Наша мебель в интерьере'}
					array={currentProduct.interior_images}>
					{currentProduct.interior_images.map((image, index) => {
						return (
							<Image
								key={index}
								className={style.image}
								src={image}
								alt={'image'}
								width={900}
								height={900}
							/>
						)
					})}
				</ArraySlider>
			) : null}
		</>
	)
}

OurFurniture.displayName = 'OurFurniture'
export default memo(OurFurniture)
