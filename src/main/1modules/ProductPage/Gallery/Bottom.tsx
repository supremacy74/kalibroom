import { FC } from 'react'
import style from './Gallery.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCurrentImageIndex } from '@/store/reducers/products/productPage'
import ImageSelector from '@/main/3ui/ImageSelector/ImageSelector'

const Bottom: FC = () => {
	const currentImages = useAppSelector(state => state.productPage.currentImages)
	const currentImage = useAppSelector(
		state => state.productPage.currentImageIndex
	)

	const dispatch = useAppDispatch()

	const setterCurrentImageIndex = (data: number) => {
		dispatch(setCurrentImageIndex(data))
	}

	return (
		<div className={style.bottom}>
			{currentImages?.length ? (
				currentImages.map((image, index) => {
					return (
						<ImageSelector
							key={index}
							image={image}
							currentImage={currentImage}
							setCurrentImage={setterCurrentImageIndex}
							index={index}
							layoutId={'current image selector gallery'}
						/>
					)
				})
			) : (
				<div className={style.imageSelectorButton} />
			)}
		</div>
	)
}

export default Bottom
