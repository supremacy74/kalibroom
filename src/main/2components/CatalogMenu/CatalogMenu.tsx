import { AnimatePresence, motion } from 'framer-motion'
import { FC, memo } from 'react'
import style from './styles/CatalogMenu.module.scss'
import { useAppSelector } from '@/store/hooks'
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'
import { catalogMenuV } from '@/main/2components/CatalogMenu/styles/variants'
import { catalogI } from '@/main/2components/BottomHeaderPart/BottomHeaderPart'
import CatalogButton from '@/main/3ui/catalogUi/CategoryButton/CategoryButton'
import Link from 'next/link'

interface CategoriesMenuI {
	categories: catalogI
}

const CatalogMenu: FC<CategoriesMenuI> = props => {
	const bottomHeaderPartVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)
	const catalogIsOpen = useAppSelector(
		state => state.catalog.isOpen
	)
	const productsIsOpen = useAppSelector(
		state => state.catalog.productsIsOpen
	)
	const ideasIsOpen = useAppSelector(
		state => state.catalog.ideasIsOpen
	)
	const indexOfCurrentCategory = useAppSelector(
		state => state.catalog.indexOfCurrentCategory
	)

	return (
		<AnimatePresence>
			{bottomHeaderPartVisible && catalogIsOpen && (
				<motion.div
					{...getCommonAnimation()}
					variants={catalogMenuV}
					transition={getSpringTransition(10, 30)}
					className={style.menu}>
					<div className={style.nav}>
						{productsIsOpen &&
							props.categories.products.map(
								(value, index) => {
									return (
										<CatalogButton
											key={index}
											index={index}
											buttonValues={value}
										/>
									)
								}
							)}
						{ideasIsOpen &&
							props.categories.ideas.map((value, index) => {
								return (
									<CatalogButton
										key={index}
										index={index}
										buttonValues={value}
									/>
								)
							})}
					</div>
					<main className={style.categories}>
						{productsIsOpen &&
							props.categories.products[
								indexOfCurrentCategory
							].blocks.map((block, index) => {
								return (
									<div key={index} className={style.block}>
										<span className={style.blockTitle}>
											{block.title}
										</span>
										<div className={style.links}>
											{block.links.map((link, index) => {
												return (
													<Link
														key={index}
														className={style.link}
														href={link.link}>
														{link.title}
													</Link>
												)
											})}
										</div>
									</div>
								)
							})}
					</main>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

CatalogMenu.displayName = 'CatalogMenu'
export default memo(CatalogMenu)
