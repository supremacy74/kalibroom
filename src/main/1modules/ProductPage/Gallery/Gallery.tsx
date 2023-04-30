import { FC } from 'react'
import style from './Gallery.module.scss'
import Bottom from '@/main/1modules/ProductPage/Gallery/Bottom'
import Middle from '@/main/1modules/ProductPage/Gallery/Middle'
import Top from '@/main/1modules/ProductPage/Gallery/Top'
import CurrentImage from '@/main/1modules/ProductPage/Gallery/CurrentImage'
import { useAppSelector } from '@/store/hooks'

const Gallery: FC = () => {
	const isOpen = useAppSelector(state => state.productPage.galleryIsOpen)

	return (
		<>
			{isOpen && (
				<div className={style.gallery}>
					<CurrentImage />
					<Top />
					<Middle />
					<Bottom />
				</div>
			)}
		</>
	)
}

export default Gallery
