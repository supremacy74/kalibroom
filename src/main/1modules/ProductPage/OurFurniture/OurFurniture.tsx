import { FC, memo } from 'react'
import style from './OurFurniture.module.scss'
import ArraySlider from '@/main/2components/ArraySlider/ArraySlider'
import Image from 'next/image'
import { getRandom } from '@/helpers/commonFunctions'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import {mainImage} from "@/helpers/importImages";
import {useAppSelector} from "@/store/hooks";

interface OurFurnitureProps {}

const OurFurniture: FC<OurFurnitureProps> = () => {
	const currentProduct = useAppSelector(state => state.productPage.currentProduct)

	return (
		<>
			{currentProduct && currentProduct.images_in_interiors && (
				<ArraySlider
					title={'Наша мебель в интерьере'}
					array={currentProduct.images_in_interiors}>
					{currentProduct.images_in_interiors.map(
						(image, index) => {
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
						}
					)}
				</ArraySlider>
			)}
		</>
	)
}

OurFurniture.displayName = 'OurFurniture'
export default memo(OurFurniture)
