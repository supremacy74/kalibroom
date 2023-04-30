import {FC, useEffect, useState} from 'react'
import style from './Gallery.module.scss'
import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import { mainImage } from '@/helpers/importImages'

const CurrentImage: FC = () => {
	const currentImages = useAppSelector(state => state.productPage.currentImages)
	const currentImageIndex = useAppSelector(
		state => state.productPage.currentImageIndex
	)

	return (
		<div className={style.currentImageWrapper}>
			<Image
        className={style.currentImage}
				src={
					currentImages && currentImages[currentImageIndex]
						? currentImages[currentImageIndex].url
						: mainImage
				}
        width={2000}
        height={2000}
				alt={'current image'}
			/>
		</div>
	)
}

export default CurrentImage
