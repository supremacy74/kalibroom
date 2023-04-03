import { NextPage } from 'next'
import { memo } from 'react'
import style from './styles/MainRightPart.module.scss'
import Image from 'next/image'
import { questionIcon } from '@/helpers/importIcons'
import Properties from '@/main/1modules/ProductPage/Properties/Properties'
import { useRouter } from 'next/router'

interface MainRightPartProps {}

const MainRightPart: NextPage<
	MainRightPartProps
> = props => {
	const router = useRouter()

	return (
		<div className={style.mainContentRightPart}>
			<div className={style.contentWithText}>
				<div className={style.top}>
					<h3 className={style.title}>
						{router.query.product}
					</h3>
					<p className={style.category}>category</p>
				</div>
				<div className={style.pricePart}>
					<div className={style.pricePartTop}>
						<div className={style.price}>
							<span className={style.currentPrice}>
								19 790 ₽
							</span>
							<span className={style.priceWithoutDiscount}>
								24 990 ₽
							</span>
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
						<button className={style.buyButton}>
							В корзину
						</button>
						<button className={style.buyOneClickButton}>
							Купить в 1 клик
						</button>
					</div>
				</div>
			</div>
			<Properties />
		</div>
	)
}

MainRightPart.displayName = 'MainRightPart'
export default memo(MainRightPart)
