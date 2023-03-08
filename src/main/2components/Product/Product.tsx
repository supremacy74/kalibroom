import { FC, memo } from 'react'
import style from './styles/Product.module.scss'
import Image from 'next/image'

interface ProductProps {
	image?: string
	price: string
	title: string
	category: string
}

const Product: FC<ProductProps> = props => {
	return (
		<div className={style.product}>
			<div className={style.imageWrapper}>
				{props.image ? (
					<Image
						className={style.image}
						src={props.image}
						alt={'productImage'}
					/>
				) : (
					<div
						style={{height: `${Math.ceil(Math.random() * 20) + 10 }rem`}}
						className={style.imageNotFound}>
						image not found
					</div>
				)}
			</div>
			<div className={style.bottom}>
				<div className={style.text}>
					<div className={style.title}>{props.title}</div>
					<div className={style.category}>
						{props.category}
					</div>
				</div>
				<div className={style.price}>{props.price}</div>
			</div>
		</div>
	)
}

Product.displayName = 'Product'
export default memo(Product)
