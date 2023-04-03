import { FC, memo } from 'react'
import style from './styles/OurFurniture.module.scss'
import ArraySlider from '@/main/2components/ArraySlider/ArraySlider'
import Image from 'next/image'
import { getRandom } from '@/helpers/commonFunctions'

interface OurFurnitureProps {

}

const OurFurniture: FC<OurFurnitureProps> = props => {
	const array = [1, 2, 3, 4, 5, 6, 7]

  return (
		<ArraySlider title={'Наша мебель в интерьере'} array={array}>
			{array.map((value, index) => {
				return (
					<Image
						key={index}
						className={style.image}
						src={`https://random.imagecdn.app/${getRandom(
							1000,
							1400
						)}/${getRandom(900, 1500)}`}
						alt={'image'}
						width={900}
						height={900} />
				)
			})}
		</ArraySlider>
  )
}

OurFurniture.displayName = 'OurFurniture'
export default memo(OurFurniture)