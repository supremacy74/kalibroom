import { FC, memo } from 'react'
import style from './OurFurniture.module.scss'
import ArraySlider from '@/main/2components/ArraySlider/ArraySlider'
import Image from 'next/image'
import { getRandom } from '@/helpers/commonFunctions'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import {mainImage} from "@/helpers/importImages";

interface OurFurnitureProps {}

const OurFurniture: FC<OurFurnitureProps> = () => {
	return (
		<>
			{arrayOfProducts[0].images_in_interiors && (
				<ArraySlider
					title={'Наша мебель в интерьере'}
					array={arrayOfProducts[0].images_in_interiors}>
					{arrayOfProducts[0].images_in_interiors?.map(
						(image, index) => {
							return (
								<Image
									key={index}
									className={style.image}
									src={mainImage}
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
