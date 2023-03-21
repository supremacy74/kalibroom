import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/Hero.module.scss'
import RoundedButtonWithCircle from '@/main/3ui/RoundedButtonWithCircle/RoundedButtonWithCircle'
import {useRouter} from "next/router";

const Title: FC = () => {
	return (
		<h3 className={style.title}>
			Переключайтесь между товарами и идеями, чтобы перейти
			в каталог товаров, либо посмотреть идеи для
			вдохновения
		</h3>
	)
}

const Hero: FC = props => {
	return (
		<div className={style.hero}>
			<Title />
			<div className={style.buttons}>
				<RoundedButtonWithCircle
					link={'/products'}>
					Товары
				</RoundedButtonWithCircle>
				<RoundedButtonWithCircle
					link={'/ideas'}>
					Идеи
				</RoundedButtonWithCircle>
			</div>
		</div>
	)
}

Hero.displayName = 'Hero'
export default memo(Hero)
