import { FC, memo } from 'react'
import style from './MainRightPart.module.scss'
import Image from 'next/image'
import { questionIcon } from '@/helpers/importIcons'
import Properties from '@/main/1modules/ProductPage/Properties/Properties'
import { createPrice } from '@/helpers/commonFunctions'
import Button from '@/main/3ui/Buttons/Button/Button'
import { useAppSelector } from '@/store/hooks'

const MainRightPart: FC = () => {
	const currentProduct = useAppSelector(
		state => state.productPage.currentProduct
	)

	return (
		currentProduct && (
			<div className={style.mainContentRightPart}>
				<div className={style.contentWithText}>
					<div className={style.top}>
						<h3 className={style.title}>{currentProduct.name}</h3>
						{currentProduct.breadcrumbs && (
							<p className={style.category}>
								{currentProduct.breadcrumbs[1].title}
							</p>
						)}
					</div>
					<div className={style.pricePart}>
						<div className={style.pricePartTop}>
							{currentProduct.price && (
								<div className={style.price}>
									<span className={style.currentPrice}>
										{createPrice(currentProduct.price)} ₽
									</span>
									{currentProduct.discount && (
										<span className={style.priceWithoutDiscount}>
											{createPrice(
												currentProduct.price +
													(currentProduct.price / 100) * currentProduct.discount
											)}{' '}
											₽
										</span>
									)}
								</div>
							)}
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
	)
}

MainRightPart.displayName = 'MainRightPart'
export default memo(MainRightPart)
