import {AnimatePresence, motion} from 'framer-motion'
import { FC, memo } from 'react'
import style from './styles/CatalogMenu.module.scss'
import {bottomHeaderPartV} from "@/main/2components/BottomHeaderPart/styles/variants";
import {useAppSelector} from "@/store/hooks";
import {getCommonAnimation, getSpringTransition} from "@/helpers/animations";
import {catalogMenuV} from "@/main/2components/CatalogMenu/styles/variants";

export interface categoriesI {
	title: string
	blocks: {
		title: string
		links: {
			title: string
			link: string
		}[]
	}[]
}

interface CategoriesMenuI {
	categories: categoriesI[]
}

const CatalogMenu: FC<CategoriesMenuI> = props => {
	const bottomHeaderPartVisible = useAppSelector(state => state.headerBottomPart.isVisible)
	const catalogIsOpen = useAppSelector(state => state.catalog.isOpen)

	return (
		<AnimatePresence>
			{bottomHeaderPartVisible && catalogIsOpen && (
				<motion.div
					{...getCommonAnimation()}
					variants={catalogMenuV}
					transition={getSpringTransition(10, 30)}
					className={style.menu}>
					<div className={style.nav}>
						{props.categories.map((value, index) => {
							return (
								<button className={style.category}>

								</button>
							)
						})}
					</div>
					<main className={style.categories}>

					</main>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

CatalogMenu.displayName = 'CatalogMenu'
export default memo(CatalogMenu)
