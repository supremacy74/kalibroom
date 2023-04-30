import { FC } from 'react'
import { PropertyI } from '@/main/1modules/ProductPage/Properties/interfaces'
import { useAppSelector } from '@/store/hooks'
import style from '@/main/1modules/ProductPage/Properties/Properties.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { rightArrowDarkIcon, rightArrowIcon } from '@/helpers/importIcons'

const Delivery: FC<PropertyI> = props => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	return (
		<div className={style.delivery}>
			{props.product.quantity && (
				<>
					<span className={style.deliveryCount}>
						В наличии: {props.product.quantity}
					</span>
					<Link className={style.deliveryLink} href={'#'}>
						<span>Рассчитать стоимость доставки</span>
						{!theme && <Image src={rightArrowIcon} alt={'rightArrowIcon'} />}
						{theme && (
							<Image src={rightArrowDarkIcon} alt={'rightArrowDarkIcon'} />
						)}
					</Link>
				</>
			)}
			{!props.product.quantity && (
				<span className={style.deliveryCount}>В наличии нет товаров</span>
			)}
		</div>
	)
}

export default Delivery
