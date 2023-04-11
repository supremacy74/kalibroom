import { FC, memo, useEffect } from 'react'
import style from './styles/Header.module.scss'
import BottomHeaderPart from '@/main/1modules/Header/BottomHeaderPart'
import TopHeaderPart from '@/main/1modules/Header/TopHeaderPart'
import { useHeaderVisible } from '@/main/1modules/Header/helpers/useHeaderVisible'
import Breadcrumb from '@/main/1modules/Header/Breadcrumb'
import { useRouter } from 'next/router'
import CatalogMenu from "@/main/2components/CatalogMenu/CatalogMenu";
import { catalogMenuData } from "@/data/catalogMenuData";

const Header: FC = () => {
	const router = useRouter()
	useHeaderVisible()

	useEffect(() => {
		console.log(router.query)
	}, [router])

	return (
		<>
			<div className={style.headerWrapper}>
				<header className={style.header}>
					<TopHeaderPart />
					<BottomHeaderPart />
					<Breadcrumb />


					<CatalogMenu categories={catalogMenuData} />
				</header>
			</div>
		</>
	)
}

Header.displayName = 'Header'
export default memo(Header)
