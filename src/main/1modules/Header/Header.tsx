import { FC, memo } from 'react'
import style from './styles/Header.module.scss'
import BottomHeaderPart from '@/main/1modules/Header/BottomHeaderPart'
import TopHeaderPart from '@/main/1modules/Header/TopHeaderPart'
import { useHeaderVisible } from '@/main/1modules/Header/helpers/useHeaderVisible'
import Breadcrumb from '@/main/1modules/Header/ProductBreadcrumb'
import CatalogMenu from '@/main/2components/CatalogMenu/CatalogMenu'
import { useAppSelector } from '@/store/hooks'
import SearchMenu from "@/main/1modules/Header/SearchMenu";
import CategoryMenu from "@/main/2components/CategoryMenu/CategoryMenu";

const Header: FC = () => {
	const paths = useAppSelector(state => state.paths)

	useHeaderVisible()

	return (
		<>
			<div className={style.headerWrapper}>
				<header className={style.header}>
					<TopHeaderPart />
					<BottomHeaderPart />
					{paths.length ? <Breadcrumb /> : null}

					{/*<CatalogMenu categories={catalogMenuData} />*/}
					<CategoriesMenu />
					<SearchMenu />
				</header>
			</div>
		</>
	)
}

const CategoriesMenu = () => {
	const firstFiveCategories = useAppSelector(state => state.categories.firstFiveCategories)

	return (
		<>
			{firstFiveCategories.map((category, index) => {
				return (
					<CategoryMenu key={index} category={category} index={index} />
				)
			})}
		</>
	)
}

Header.displayName = 'Header'
export default memo(Header)
