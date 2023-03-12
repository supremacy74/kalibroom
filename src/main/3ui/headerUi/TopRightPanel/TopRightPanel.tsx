import { FC, memo } from 'react'
import style from './styles/TopRightPanel.module.scss'
import Image from 'next/image'
import {
	heartDarkIcon,
	heartIcon, searchDarkIcon,
	searchIcon,
} from '@/helpers/importIcons'
import {useAppSelector} from "@/store/hooks";

const TopRightPanel: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	return (
		<div className={style.topRightPanel}>
			<button className={style.buttonWithIcon}>
				Поиск
				{!theme && (
					<Image
						className={style.icon}
						src={searchIcon}
						alt={'searchIcon'}
					/>
				)}
				{theme && (
					<Image
						className={style.icon}
						src={searchDarkIcon}
						alt={'searchIcon'}
					/>
				)}
			</button>
			<button className={style.buttonWithIcon}>
				Избранное
				{!theme && (
					<Image
						className={style.icon}
						src={heartIcon}
						alt={'searchIcon'}
					/>
				)}
				{theme && (
					<Image
						className={style.icon}
						src={heartDarkIcon}
						alt={'searchIcon'}
					/>
				)}
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
