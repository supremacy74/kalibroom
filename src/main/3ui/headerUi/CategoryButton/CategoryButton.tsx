import { FC, memo, useRef, useState } from 'react'
import style from './styles/CategoryButton.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { vectorDownV } from './styles/variants'
import { getSpringTransition } from '@/helpers/animations'
import Image from 'next/image'
import {
	vectorDownDarkIcon,
	vectorDownIcon,
} from '@/helpers/importIcons'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { setCatalogCategoryIndexInHeader } from '@/store/reducers/catalog'
import { useOnClickOutside } from '@/helpers/customHooks'
import CategoryMenu from '@/main/2components/CategoryMenu/CategoryMenu'
import { categoriesI } from '@/main/1modules/Header/BottomHeaderPart'

interface CategoryButtonI {
	title: string
	index: number
	category: categoriesI
}

const CategoryButton: FC<CategoryButtonI> = props => {
	const ref = useRef(null)
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const indexOfCurrentCategoryInHeader = useAppSelector(
		state => state.catalog.indexOfCurrentCategoryInHeader
	)
	const headerBottomPartIsVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)
	const catalogIsOpen = useAppSelector(
		state => state.catalog.isOpen
	)

	const dispatch = useAppDispatch()
	const closeMenu = () =>
		dispatch(setCatalogCategoryIndexInHeader(-1))

	// useOnClickOutside(ref, () => closeMenu())

	return (
		<button
			onKeyDown={e => {
				if (e.key === 'Escape') {
					closeMenu()
				}
			}}
			ref={ref}
			onClick={() => {
				if (
					props.index === indexOfCurrentCategoryInHeader
				) {
					closeMenu()
				} else {
					dispatch(
						setCatalogCategoryIndexInHeader(props.index)
					)
				}
			}}
			className={style.categoryButton}>
			{props.title}
			<motion.div
				variants={vectorDownV}
				animate={
					indexOfCurrentCategoryInHeader === props.index
						? 'on'
						: 'off'
				}
				transition={getSpringTransition(30, 185)}
				className={style.iconWrapper}>
				{!theme && (
					<Image
						className={style.icon}
						src={vectorDownIcon}
						alt={'vectorDownIcon'}
					/>
				)}
				{theme && (
					<Image
						className={style.icon}
						src={vectorDownDarkIcon}
						alt={'vectorDownIcon'}
					/>
				)}
			</motion.div>
			<AnimatePresence>
				{props.index === indexOfCurrentCategoryInHeader &&
					headerBottomPartIsVisible &&
					!catalogIsOpen && (
						<CategoryMenu category={props.category} />
					)}
			</AnimatePresence>
		</button>
	)
}

CategoryButton.displayName = 'CategoryButton'
export default memo(CategoryButton)
