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
	return (
		<Link
			href={`/products/${props.category.slug}?${props.property.slug}`}
			className={style.propertyBlock}>
			{props.property.image && (
				<Image
					className={style.propertyImage}
					src={props.property.image}
					alt={props.property.title}
					width={1024}
					height={1024}
				/>
			)}
			{!props.property.image && (
				<div className={style.propertyWithoutImage} />
			)}
			<span className={style.propertyTitle}>{props.property.title}</span>
		</Link>
	)
}

CategoryField.displayName = 'CategoryField'
export default memo(CategoryField)
