import { FC, memo, useEffect } from 'react'
import { PropertyI } from '@/main/1modules/ProductPage/Properties/interfaces'
import style from '@/main/1modules/ProductPage/Properties/Properties.module.scss'
import Image from 'next/image'
import { mainImage } from '@/helpers/importImages'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCurrentMaterial } from '@/store/reducers/products/productPage'
import { materialI } from '@/interfaces/product'

const ColorAndMaterial: FC<PropertyI> = props => {
	const currentMaterial = useAppSelector(
		state => state.productPage.currentMaterial
	)

	const setterCurrentMaterial = (material: materialI) => {
		dispatch(setCurrentMaterial(material))
	}

	useEffect(() => {
		if (props.product.materials) {
			setterCurrentMaterial(props.product.materials[0])
		}
	}, [])

	const dispatch = useAppDispatch()

	return (
		<div className={style.body}>
			{props.product.materials?.map((material, index) => {
				return (
					<button
						key={index}
						className={style.handlerColor}
						onClick={() => setterCurrentMaterial(material)}>
						<Image
							className={style.handlerImage}
							src={material.image === 'image' ? mainImage : material.image}
							alt={material.type}
							width={40}
							height={40}
						/>
						{currentMaterial && material.id === currentMaterial.id && (
							<motion.div
								className={style.handlerBorderColor}
								layoutId={'color'}
								transition={getSpringTransition(20, 100)}
							/>
						)}
					</button>
				)
			})}
		</div>
	)
}

export default memo(ColorAndMaterial)
