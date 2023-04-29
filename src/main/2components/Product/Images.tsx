import { productI } from '@/interfaces/product'
import { Dispatch, FC, memo, SetStateAction, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from '@/main/2components/Product/Product.module.scss'
import Image from 'next/image'
import ImageNotFoundBlock from '@/main/3ui/ImageNotFoundBlock/ImageNotFoundBlock'
import { inViewAnimation } from '@/helpers/animations'

interface ImagesI {
	product: productI
	currentImage: number
	isLoaded: boolean
	handleIsLoaded: Dispatch<SetStateAction<boolean>>
}

const Images: FC<ImagesI> = props => {
	const [isView, handleIsView] = useState(false)

	return (
		<>
			{props.product.fore_images && props.product.fore_images.length ? (
				<>
					{props.product.fore_images.map((image, index) => {
						return (
							<AnimatePresence key={index}>
								{props.currentImage === index && (
									<motion.div
										onViewportEnter={() => handleIsView(true)}
										data-is-loaded={props.isLoaded}
										className={style.innerImageWrapper}>
										{isView && (
											<Image
												onLoad={async () => props.handleIsLoaded(true)}
												quality={60}
												className={style.image}
												src={image.url ? image.url : ''}
												alt={'productImage'}
												width={800}
												height={800}
												loading='eager'
											/>
										)}
									</motion.div>
								)}
							</AnimatePresence>
						)
					})}
				</>
			) : (
				<ImageNotFoundBlock
					height={`min(15rem, 100%)`}
					onLoad={props.handleIsLoaded}
				/>
			)}
		</>
	)
}

export default memo(Images)
