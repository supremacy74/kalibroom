import { FC, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './styles/BottomHeaderPart.module.scss'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import CategoryButton from '@/main/3ui/headerUi/CategoryButton/CategoryButton'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import ThemeSlider from '@/main/3ui/headerUi/ThemeSlider/ThemeSlider'
import { bottomHeaderPartV } from '@/main/1modules/Header/styles/variants'
import { getCommonAnimation } from '@/helpers/animations'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import WideButton from '@/main/3ui/headerUi/WideButton/WideButton'
import {
	toggleCatalogCategoryToIdeas,
	toggleCatalogCategoryToProducts,
} from '@/store/reducers/header/catalog'
import { setCategories } from '@/store/reducers/header/categories'
import { categoryI } from '@/interfaces/category'
import { getAllCategories } from '@/data/apiController'

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

export interface catalogI {
	products: categoriesI[]
	ideas: categoriesI[]
}

const BottomHeaderPart: FC = () => {
	const isVisible = useAppSelector(state => state.headerBottomPart.isVisible)
	const catalogIsOpen = useAppSelector(state => state.catalog.isOpen)
	const ideasIsOpen = useAppSelector(state => state.catalog.ideasIsOpen)
	const productsIsOpen = useAppSelector(state => state.catalog.productsIsOpen)
	const categories = useAppSelector(state => state.categories)

	const dispatch = useAppDispatch()

	const wideButtons = [
		{
			title: 'Товары',
			active: productsIsOpen,
			onClick: async () => dispatch(toggleCatalogCategoryToProducts()),
		},
		{
			title: 'Идеи',
			active: ideasIsOpen,
			onClick: async () => dispatch(toggleCatalogCategoryToIdeas()),
		},
	]

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					variants={bottomHeaderPartV}
					{...getCommonAnimation()}
					transition={{
						duration: 0.3,
						ease: 'easeInOut',
					}}
					className={style.part}>
					<CatalogButton />
					{!catalogIsOpen &&
						categories.categories
							.filter(item => item.id === item.parent_id)
							.map((category, index) => {
								if (index !== 0 && index < 6) {
									return (
										<CategoryButton
											key={index}
											title={category.name}
											index={index}
										/>
									)
								}
							})}
					{!catalogIsOpen &&
						!categories.categories.length &&
						Array.from({ length: 5 }).map((value, index) => {
							return <CategoryButton key={index} index={index} title={'-'} />
						})}
					{catalogIsOpen &&
						wideButtons.map((value, index) => {
							return (
								<WideButton
									key={index}
									onClick={value.onClick}
									active={value.active}>
									{value.title}
								</WideButton>
							)
						})}
					<InStockButton />
					<ThemeSlider />
				</motion.div>
			)}
		</AnimatePresence>
	)
}

BottomHeaderPart.displayName = 'BottomHeaderPart'
export default BottomHeaderPart
