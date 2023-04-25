import { productI } from '@/interfaces/product'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from '@/main/2components/Product/Product.module.scss'
import Image from 'next/image'
import ImageNotFoundBlock from '@/main/3ui/ImageNotFoundBlock/ImageNotFoundBlock'

interface ImagesI {
	product: productI
	currentImage: number
	isLoaded: boolean
	handleIsLoaded: Dispatch<SetStateAction<boolean>>
}

const Images: FC<ImagesI> = props => {
	return (
		<>
			{props.product.images.length ? (
				<>
					{props.product.images.map((image, index) => {
						return (
							<AnimatePresence key={index}>
								{props.currentImage === index && (
									<motion.div
										data-is-loaded={props.isLoaded}
										className={style.innerImageWrapper}>
										<Image
											onLoad={async () =>
												props.handleIsLoaded(true)
											}
											quality={60}
											className={style.image}
											src={image.imageURL}
											alt={'productImage'}
											width={800}
											height={800}
											loading='lazy'
										/>
									</motion.div>
								)}
							</AnimatePresence>
						)
					})}
				</>
			) : (
				<ImageNotFoundBlock
					height={`10rem`}
					onLoad={props.handleIsLoaded}
				/>
			)}
		</>
	)
}

export default memo(Images)