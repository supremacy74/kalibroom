import { memo, FC } from 'react'
import style from './styles/CategoryMenu.module.scss'
import { categoriesI } from '@/main/2components/BottomHeaderPart/BottomHeaderPart'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'
import { catalogMenuV } from '@/main/2components/CatalogMenu/styles/variants'

interface CategoryMenuProps {
	category: categoriesI
}

const CategoryMenu: FC<CategoryMenuProps> = props => {
	return (
		<motion.div
			{...getCommonAnimation()}
			variants={catalogMenuV}
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
	)
}

CategoryMenu.displayName = 'CategoryMenu'
export default memo(CategoryMenu)
