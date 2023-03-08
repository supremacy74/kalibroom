import { FC, memo } from 'react'
import style from './styles/TopRightPanel.module.scss'
import Image from 'next/image'
import {
	heartIcon,
	searchIcon,
} from '@/helpers/importIcons'

const TopRightPanel: FC = () => {
	return (
		<div className={style.topRightPanel}>
			<button className={style.buttonWithIcon}>
				Поиск
				<Image
					className={style.icon}
					src={searchIcon}
					alt={'searchIcon'}
				/>
			</button>
			<button className={style.buttonWithIcon}>
				Избранное
				<Image
					className={style.icon}
					src={heartIcon}
					alt={'searchIcon'}
				/>
			</button>
			<button className={style.buttonWithIcon}>
				Корзина
				<div className={style.cartCounter}>0</div>
			</button>
		</div>
	)
}

TopRightPanel.displayName = 'TopRightPanel'
export default memo(TopRightPanel)
