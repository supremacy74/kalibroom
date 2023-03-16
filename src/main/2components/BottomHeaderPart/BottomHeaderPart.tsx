import { FC, memo, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './styles/BottomHeaderPart.module.scss'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import CategoryButton from '@/main/3ui/headerUi/CategoryButton/CategoryButton'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import ThemeSlider from '@/main/3ui/headerUi/ThemeSlider/ThemeSlider'
import { bottomHeaderPartV } from '@/main/2components/BottomHeaderPart/styles/variants'
import { getCommonAnimation } from '@/helpers/animations'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import WideButton from '@/main/3ui/headerUi/WideButton/WideButton'
import {
	toggleCatalogCategoryToIdeas,
	toggleCatalogCategoryToProducts,
} from '@/store/reducers/catalog'
import CatalogMenu, {categoriesI} from "@/main/2components/CatalogMenu/CatalogMenu";

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

	const categoryButtons = [
		'диваны',
		'кровати',
		'столы',
		'стулья',
		'кресла',
	]

	interface catalogI {
		products: categoriesI[]
		ideas: categoriesI[],
	}

	const catalogMenuData: catalogI = {
		products: [
			{
				title: 'Диваны',
				blocks: [
					{
						title: 'По размеру',
						links: [
							{
								title: '2-местные',
								link: '',
							},
							{
								title: '3-местные',
								link: '',
							},
							{
								title: '4-местные',
								link: '',
							},
						]
					},
					{
						title: 'По форме',
						links: [
							{
								title: 'Прямые диваны',
								link: '',
							},
							{
								title: 'Угловые',
								link: '',
							},
							{
								title: 'Модульные',
								link: '',
							},
						]
					},
					{
						title: 'По функции',
						links: [
							{
								title: 'Без спального места',
								link: '',
							},
							{
								title: 'Со спальным местом',
								link: '',
							},
							{
								title: 'Механизм 1',
								link: '',
							},
							{
								title: 'Механизм 2',
								link: '',
							},
						]
					},
				]
			},
			{
				title: 'Кровати',
				blocks: [],
			},
			{
				title: 'стулья',
				blocks: [],
			},
			{
				title: 'столы',
				blocks: [],
			},
			{
				title: 'кресла',
				blocks: [],
			},
			{
				title: 'Пуфы, банкетки и скамьи',
				blocks: [],
			},
			{
				title: 'Аксессуары',
				blocks: [],
			},
		],
		ideas: [
			{
				title: 'Экономия',
				blocks: []
			},
			{
				title: 'Стиль',
				blocks: []
			},
			{
				title: 'Цвет',
				blocks: []
			},
			{
				title: 'Текстура',
				blocks: []
			},
			{
				title: 'Материал',
				blocks: []
			},
			{
				title: 'Hand made',
				blocks: []
			},
			{
				title: 'свет',
				blocks: []
			},
		]
	}

	const wideButtons = [
		{
			title: 'Товары',
			active: productsIsOpen,
			onClick: () => dispatch(toggleCatalogCategoryToProducts()),
		},
		{
			title: 'Идеи',
			active: ideasIsOpen,
			onClick: () => dispatch(toggleCatalogCategoryToIdeas()),
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
						categoryButtons.map((value, index) => {
							return (
								<CategoryButton key={index} title={value} />
							)
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
					<CatalogMenu categories={[]}/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

BottomHeaderPart.displayName = 'BottomHeaderPart'
export default memo(BottomHeaderPart)
