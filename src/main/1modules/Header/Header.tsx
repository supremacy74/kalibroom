import { FC, memo, useState } from 'react'
import style from './styles/Header.module.scss'
import BottomHeaderPart from '@/main/2components/BottomHeaderPart/BottomHeaderPart'
import TopHeaderPart from '@/main/2components/TopHeaderPart/TopHeaderPart'
import CatalogMenu from '@/main/2components/CatalogMenu/CatalogMenu'
import { catalogMenuData } from '@/data/catalogMenuData'
import { useHeaderVisible } from '@/main/1modules/Header/helpers/useHeaderVisible'

const Header: FC = () => {
	const [headerBottomIsVisible, handleHeaderBottomVisible] =
		useState(true)

	useHeaderVisible(
		headerBottomIsVisible,
		handleHeaderBottomVisible
	)

	return (
		<>
			<div className={style.headerWrapper}>
				<header className={style.header}>
					<TopHeaderPart />
					<BottomHeaderPart />

					<CatalogMenu categories={catalogMenuData} />
				</header>
			</div>
		</>
	)
}

Header.displayName = 'Header'
export default memo(Header)
