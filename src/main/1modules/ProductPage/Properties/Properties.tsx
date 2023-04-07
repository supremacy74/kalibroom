import { FC, memo, ReactNode, useState } from 'react'
import style from './styles/Properties.module.scss'
import { productI } from '@/interfaces/product'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import Image from 'next/image'
import {
	AnimatePresence,
	motion,
	Variants,
} from 'framer-motion'
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'
import Link from 'next/link'
import {
	rightArrowDarkIcon,
	rightArrowIcon,
	vectorDownDarkIcon,
	vectorDownIcon,
} from '@/helpers/importIcons'
import { useAppSelector } from '@/store/hooks'

const Properties: FC = () => {
	// TODO: считывать текущий продукт из состояния в хранилище

	return (
		<div className={style.properties}>
			<div className={style.colorAndMaterial}>
				<PropertyName>Цвет и материал</PropertyName>
				<ColorAndMaterialBody
					product={arrayOfProducts[0]}
				/>
				<PropertyAll onClick={() => {}}>
					Все цвета
				</PropertyAll>
			</div>
			<div className={style.sizes}>
				<PropertyName>Размер</PropertyName>
				<Sizes product={arrayOfProducts[0]} />
				<PropertyAll onClick={() => {}}>
					Все размеры
				</PropertyAll>
			</div>
			<Delivery product={arrayOfProducts[0]} />
			<Accordion name={'характеристики'}>
				Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Dicta dolore doloremque, eius error facere
				minima sint unde. Beatae ea iusto magnam mollitia
				porro quam recusandae reiciendis, repellendus
				repudiandae vitae, voluptatibus.
			</Accordion>
			<Accordion name={'посмотреть наличие в шоурумах'}>
				Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Dicta dolore doloremque, eius error facere
				minima sint unde. Beatae ea iusto magnam mollitia
				porro quam recusandae reiciendis, repellendus
				repudiandae vitae, voluptatibus.
			</Accordion>
		</div>
	)
}

interface PropertyI {
	product: productI
}

interface AccordionI {
	name: string
	children?: ReactNode
}

const Accordion: FC<AccordionI> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const [isExpand, handleExpand] = useState(false)

	const bottomVariants: Variants = {
		on: {
			height: 'auto',
			marginBottom: '1.5rem',
		},
		off: {
			height: '0',
			marginBottom: '0rem',
		},
	}

	return (
		<div className={style.accordion}>
			<button
				onClick={() => handleExpand(prev => !prev)}
				className={style.accordionTop}>
				<PropertyName>{props.name}</PropertyName>
				<div
					data-is-expand={isExpand}
					className={style.accordionImageWrapper}>
					{!theme && (
						<Image
							src={vectorDownIcon}
							alt={'vectorDownIcon'}
						/>
					)}
					{theme && (
						<Image
							src={vectorDownDarkIcon}
							alt={'vectorDownDarkIcon'}
						/>
					)}
				</div>
			</button>
			<AnimatePresence>
				{isExpand && (
					<motion.div
						{...getCommonAnimation()}
						variants={bottomVariants}
						className={style.accordionBottom}>
						{props.children}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

const Delivery: FC<PropertyI> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<div className={style.delivery}>
			{props.product.quantity && (
				<>
					<span className={style.deliveryCount}>
						В наличии: {props.product.quantity}
					</span>
					<Link className={style.deliveryLink} href={'#'}>
						<span>Рассчитать стоимость доставки</span>
						{!theme && (
							<Image
								src={rightArrowIcon}
								alt={'rightArrowIcon'}
							/>
						)}
						{theme && (
							<Image
								src={rightArrowDarkIcon}
								alt={'rightArrowDarkIcon'}
							/>
						)}
					</Link>
				</>
			)}
			{!props.product.quantity && (
				<span className={style.deliveryCount}>
					В наличии нет товаров
				</span>
			)}
		</div>
	)
}

const Sizes: FC<PropertyI> = props => {
	const [currentSize, setCurrentSize] = useState(0)

	return (
		<div className={style.body}>
			{props.product.sizes?.map((value, index) => {
				return (
					<button
						key={index}
						data-is-current-size={currentSize === index}
						className={style.handlerSize}
						onClick={() => {
							setCurrentSize(index)
						}}>
						<span className={style.handlerSizeText}>
							{value}
						</span>
					</button>
				)
			})}
		</div>
	)
}

const ColorAndMaterialBody: FC<PropertyI> = props => {
	const [currentColor, setCurrentColor] = useState(0)

	return (
		<div className={style.body}>
			{props.product.materials?.map((material, index) => {
				return (
					<button
						key={index}
						className={style.handlerColor}
						onClick={() => {
							setCurrentColor(index)
						}}>
						<Image
							className={style.handlerImage}
							src={material.image}
							alt={material.title}
							width={40}
							height={40}
						/>
						{currentColor === index && (
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

interface ComponentWithChildren {
	children?: ReactNode
}

interface AllI extends ComponentWithChildren {
	onClick: CallableFunction
}

const PropertyAll: FC<AllI> = props => {
	return (
		<button
			className={style.propertyLink}
			onClick={() => {
				props.onClick()
			}}>
			{props.children}
		</button>
	)
}

const PropertyName: FC<ComponentWithChildren> = props => {
	return (
		<span className={style.propertyName}>
			{props.children}
		</span>
	)
}

export default memo(Properties)
