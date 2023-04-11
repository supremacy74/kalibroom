import { FC, memo } from 'react'
import style from './styles/TopRightPanel.module.scss'
import Image from 'next/image'
import {
	heartDarkIcon,
	heartIcon, searchDarkIcon,
	searchIcon,
} from '@/helpers/importIcons'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSearchMenu } from "@/store/reducers/search";
import { setCatalogCategoryIndexInHeader, setCatalogMenu } from "@/store/reducers/catalog";

const TopRightPanel: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	const dispatch = useAppDispatch()

	return (
		<div className={style.topRightPanel}>
			<button
				onClick={() => {
					dispatch(setCatalogCategoryIndexInHeader(-1))
					dispatch(toggleSearchMenu())
					dispatch(setCatalogMenu(false))
				}}
				className={`${style.buttonWithIcon} ${style.searchButton}`}>
				<span className={style.searchText}>Поиск</span>
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
						alt={'searchDarkIcon'}
					/>
				)}
			</button>
			<button className={style.buttonWithIcon}>
				<span className={style.favoriteText}>Избранное</span>
				{!theme && (
					<Image
						className={style.icon}
						src={heartIcon}
						alt={'heartIcon'}
					/>
				)}
				{theme && (
					<Image
						className={style.icon}
						src={heartDarkIcon}
						alt={'heartDarkIcon'}
					/>
				)}
			</button>
			<button className={`${style.buttonWithIcon} ${style.cartButton}`}>
				<span className={style.cartText}>Корзина</span>
				<div className={style.cartCounter}>0</div>
			</button>
		</div>
	)
}

TopRightPanel.displayName = 'TopRightPanel'
export default memo(TopRightPanel)
