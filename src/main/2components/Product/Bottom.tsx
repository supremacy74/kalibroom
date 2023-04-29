import { productI } from '@/interfaces/product'
import {Dispatch, FC, memo, SetStateAction, useEffect, useState} from 'react'
import Link from 'next/link'
import style from '@/main/2components/Product/Product.module.scss'
import { createPrice } from '@/helpers/commonFunctions'
import CircleButton from '@/main/3ui/CircleButton/CircleButton'
import { cartActiveIcon, cartHoverIcon, cartIcon } from '@/helpers/importIcons'
import {getCategoryByIdOrSlug} from "@/data/apiController";
import {categoryI} from "@/interfaces/category";

interface BottomI {
	product: productI
	isActive: boolean
	handleIsActive: Dispatch<SetStateAction<boolean>>
}

const Bottom: FC<BottomI> = props => {
	return (
		<>
			<Link
				href={`/products/${props.product.category_id}/${props.product.slug}`}
				className={style.bottom}>
				<div className={style.text}>
					<div className={style.title}>
						<span className={style.titleText}>{props.product.name}</span>
						{props.product.discount && <span className={style.discount}> -{props.product.discount}%</span>}
					</div>
					<div className={style.category}>{props.product?.category_name}</div>
				</div>
				<div className={style.price}>
					<span className={style.currentPrice}>
						{createPrice(props.product.price ? props.product.price : 100000)} ₽
					</span>
					{props.product.discount && props.product.price && (
						<span className={style.oldPrice}>
							{createPrice(
								props.product.price +
									(props.product.price / 100) * props.product.discount
							)}{' '}
							₽
						</span>
					)}
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

export default Bottom
