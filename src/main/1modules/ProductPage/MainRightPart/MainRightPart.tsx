import { FC, memo } from 'react'
import style from './styles/MainRightPart.module.scss'
import Image from 'next/image'
import { questionIcon } from '@/helpers/importIcons'
import Properties from '@/main/1modules/ProductPage/Properties/Properties'
import { productI } from '@/interfaces/product'
import { createPrice } from '@/helpers/commonFunctions'
import Button from "@/main/3ui/Buttons/Button/Button";

interface MainRightPartProps {
	product: productI
}

const MainRightPart: FC<MainRightPartProps> = props => {
	return (
		<div className={style.mainContentRightPart}>
			<div className={style.contentWithText}>
				<div className={style.top}>
					<h3 className={style.title}>
						{props.product.name}
					</h3>
					<p className={style.category}>{props.product.category_id}</p>
				</div>
				<div className={style.pricePart}>
					<div className={style.pricePartTop}>
						<div className={style.price}>
							<span className={style.currentPrice}>
								{createPrice(props.product.price)} ₽
							</span>
							{props.product.discount && (
								<span
									className={style.priceWithoutDiscount}>
									{createPrice(
										props.product.price +
											(props.product.price / 100) *
												props.product.discount
									)} ₽
								</span>
							)}
						</div>
						<div className={style.installmentPlan}>
							<span className={style.installmentPlanText}>
								2 175P/месяц Рассрочка
							</span>
							<button className={style.questionButton}>
								<Image
									className={style.questionIcon}
									src={questionIcon}
									alt={'questionIcon'}
								/>
							</button>
						</div>
					</div>
					<div className={style.pricePartButtons}>
						<Button width={'175%'} type={'flat'}>
							В корзину
						</Button>
						<Button width={'100%'} type={'outline'}>
							Купить в 1 клик
						</Button>
					</div>
				</div>
			</div>
			<Properties />
		</div>
	)
}

MainRightPart.displayName = 'MainRightPart'
export default memo(MainRightPart)
