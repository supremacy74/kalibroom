import { FC, memo } from 'react'
import style from './styles/CategoryField.module.scss'
import { categoryI } from '@/interfaces/category'
import Link from 'next/link'
import { propertyI } from '@/interfaces/product'
import Image from 'next/image'

interface CategoryFieldProps {
	category: categoryI
}

const CategoryField: FC<CategoryFieldProps> = props => {
	return (
		<main className={style.main}>
			<Top category={props.category} />
			<Field category={props.category} />
		</main>
	)
}

const Top: FC<CategoryFieldProps> = props => {
	return (
		<div className={style.top}>
			<span className={style.title}>
				{props.category.title}
				<sup>268</sup>
			</span>
			<Link
				className={style.topLink}
				href={`/products/${props.category.slug}`}>
				Все {props.category.title}
			</Link>
		</div>
	)
}

const Field: FC<CategoryFieldProps> = props => {
	return (
		<div className={style.field}>
			{props.category.properties.map(property => {
				return (
					<PropertyBlock
						key={property.slug}
						property={property}
						category={props.category}
					/>
				)
			})}
		</div>
	)
}

interface PropertyBlockI {
	property: propertyI
	category: categoryI
}

const PropertyBlock: FC<PropertyBlockI> = props => {
	const image = props.property.image
	let preparedImage = null

	if (image) {
		try {
			preparedImage = require(image)
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<Link
			href={`/products/${props.category.slug}?${props.property.slug}`}
			className={style.propertyBlock}>
			{preparedImage && (
				<Image
					className={style.propertyImage}
					src={preparedImage}
					alt={props.property.title}
				/>
			)}
			{!preparedImage && (
				<div className={style.propertyWithoutImage} />
			)}
			<span className={style.propertyTitle}>{props.property.title}</span>
		</Link>
	)
}

CategoryField.displayName = 'CategoryField'
export default memo(CategoryField)
