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
import Image from 'next/image'
import {rightArrowDarkIcon, rightArrowIcon} from '@/helpers/importIcons'

interface CategoriesMenuI {
	categories: catalogI
}

const CatalogMenu: FC<CategoriesMenuI> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const bottomHeaderPartVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)
	const catalogIsOpen = useAppSelector(
		state => state.catalog.isOpen
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
						{props.categories.products.map(
							(value, index) => {
								return (
									<button
										key={index}
										className={style.category}>
										<span className={style.categoryName}>
											{value.title}
										</span>
										{!theme && (
											<Image
												src={rightArrowIcon}
												alt={'rightArrowIcon'}
											/>
										)}
										{theme && (
											<Image
												src={rightArrowDarkIcon}
												alt={'rightArrowDarkIcon'}
											/>
										)}
									</button>
								)
							}
						)}
					</div>
					<main className={style.categories}></main>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

CatalogMenu.displayName = 'CatalogMenu'
export default memo(CatalogMenu)
