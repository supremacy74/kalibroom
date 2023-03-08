import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/Hero.module.scss'
import RoundedButtonWithCircle from '@/main/3ui/RoundedButtonWithCircle/RoundedButtonWithCircle'

interface HeroProps {
	productsSelected: boolean
	handleProductsSelected: Dispatch<SetStateAction<boolean>>
	ideasSelected: boolean
	handleIdeasSelected: Dispatch<SetStateAction<boolean>>
}

const Hero: FC<HeroProps> = props => {
	return (
		<div className={style.hero}>
			<h3 className={style.title}>
				Переключайтесь между товарами и идеями, чтобы
				перейти в каталог товаров, либо посмотреть идеи для
				вдохновения
			</h3>
			<div className={style.buttons}>
				<RoundedButtonWithCircle
					onClick={() => {
						props.handleProductsSelected(prev => !prev)
						props.handleIdeasSelected(false)
					}}
					isActive={props.productsSelected}>
					Товары
				</RoundedButtonWithCircle>
				<RoundedButtonWithCircle
          onClick={() => {
						props.handleIdeasSelected(prev => !prev)
						props.handleProductsSelected(false)
					}
          }
          isActive={props.ideasSelected}>
					Идеи
				</RoundedButtonWithCircle>
			</div>
		</div>
	)
}

Hero.displayName = 'Hero'
export default memo(Hero)
