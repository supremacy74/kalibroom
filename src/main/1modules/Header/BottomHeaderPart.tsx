import { FC, memo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './styles/BottomHeaderPart.module.scss'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import CategoryButton from '@/main/3ui/headerUi/CategoryButton/CategoryButton'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import ThemeSlider from '@/main/3ui/headerUi/ThemeSlider/ThemeSlider'
import { bottomHeaderPartV } from '@/main/1modules/Header/styles/variants'
import { getCommonAnimation } from '@/helpers/animations'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import WideButton from '@/main/3ui/headerUi/WideButton/WideButton'
import {
	toggleCatalogCategoryToIdeas,
	toggleCatalogCategoryToProducts,
} from '@/store/reducers/catalog'
import CatalogMenu from '@/main/2components/CatalogMenu/CatalogMenu'
import { catalogMenuData } from '@/data/catalogMenuData'

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
	const isVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)
	const catalogIsOpen = useAppSelector(
		state => state.catalog.isOpen
	)
	const ideasIsOpen = useAppSelector(
		state => state.catalog.ideasIsOpen
	)
	const productsIsOpen = useAppSelector(
		state => state.catalog.productsIsOpen
	)

	const dispatch = useAppDispatch()

	const wideButtons = [
		{
			title: 'Товары',
			active: productsIsOpen,
			onClick: () =>
				dispatch(toggleCatalogCategoryToProducts()),
		},
		{
			title: 'Идеи',
			active: ideasIsOpen,
			onClick: () =>
				dispatch(toggleCatalogCategoryToIdeas()),
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
						catalogMenuData.products.map((value, index) => {
							if (index < 5) {
								return (
									<CategoryButton
										key={index}
										title={value.title}
										index={index}
										category={value}
									/>
								)
							}
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
export default memo(BottomHeaderPart)
