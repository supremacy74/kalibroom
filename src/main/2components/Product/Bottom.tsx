import { productI } from '@/interfaces/product'
import { Dispatch, FC, memo, SetStateAction } from 'react'
import Link from 'next/link'
import style from '@/main/2components/Product/styles/Product.module.scss'
import { createPrice } from '@/helpers/commonFunctions'
import CircleButton from '@/main/3ui/CircleButton/CircleButton'
import { cartActiveIcon, cartHoverIcon, cartIcon } from '@/helpers/importIcons'

interface BottomI {
	product: productI
	isActive: boolean
	handleIsActive: Dispatch<SetStateAction<boolean>>
}

const Bottom: FC<BottomI> = props => {
	return (
		<>
			<Link
				href={`/products/${props.product.categoryId}/${props.product.slug}`}
				className={style.bottom}>
				<div className={style.text}>
					<div className={style.title}>
						<span>{props.product.title}</span>
						<span className={style.discount}>-10%</span>
					</div>
					<div className={style.category}>
						{props.product.categoryId}
					</div>
				</div>
				<div className={style.price}>
					<span className={style.currentPrice}>
						{createPrice(props.product.price)} ₽
					</span>
					<span className={style.oldPrice}>
						{createPrice(
							props.product.price +
							(props.product.price / 100) * 10
						)}{' '}
						₽
					</span>
				</div>
			</Link>
			<CircleButton
				className={style.cartButtonMobile}
				icon={cartIcon}
				hoverIcon={cartHoverIcon}
				activeIcon={cartActiveIcon}
				isActive={props.isActive}
				handleActive={props.handleIsActive}
			/>
		</>
	)
}

export default memo(Bottom)