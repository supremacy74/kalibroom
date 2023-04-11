import { memo, FC } from 'react'
import style from './styles/CategoryMenu.module.scss'
import { categoriesI } from '@/main/1modules/Header/BottomHeaderPart'
import Link from 'next/link'
import { AnimatePresence, motion } from "framer-motion";
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'
import { menuV } from '@/helpers/variants'
import { useAppSelector } from "@/store/hooks";

interface CategoryMenuProps {
	category: categoriesI
	index: number
}

const CategoryMenu: FC<CategoryMenuProps> = props => {
	const indexOfCurrentCategoryInHeader = useAppSelector(state => state.catalog.indexOfCurrentCategoryInHeader)
	const catalogIsOpen = useAppSelector(state => state.catalog.isOpen)

	return (
		<AnimatePresence>
			{indexOfCurrentCategoryInHeader === props.index && !catalogIsOpen && (
				<motion.div
					{...getCommonAnimation()}
					variants={menuV}
					transition={getSpringTransition(10, 30)}
					className={style.menu}>
					<div className={style.blocks}>
						{props.category.blocks.map((block,  index) => {
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
					</div>
					<Link className={style.link} href={''}>
						Все {props.category.title}
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

CategoryMenu.displayName = 'CategoryMenu'
export default memo(CategoryMenu)
