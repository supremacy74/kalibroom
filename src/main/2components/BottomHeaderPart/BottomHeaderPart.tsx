import {FC, memo, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './styles/BottomHeaderPart.module.scss'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import CategoryButton from '@/main/3ui/headerUi/CategoryButton/CategoryButton'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import ThemeSlider from '@/main/3ui/headerUi/ThemeSlider/ThemeSlider'
import { bottomHeaderPartV } from '@/main/2components/BottomHeaderPart/styles/variants'
import {
	getCommonAnimation,
} from '@/helpers/animations'
import {useAppSelector} from "@/store/hooks";

const BottomHeaderPart: FC = () => {
	const isVisible = useAppSelector(state => state.headerBottomPart.isVisible)

	const categoryButtons = [
		'диваны',
		'кровати',
		'столы',
		'стулья',
		'кресла',
	]

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					variants={bottomHeaderPartV}
					{...getCommonAnimation()}
					transition={{
						duration: .3,
						ease: 'easeInOut',
					}}
					className={style.part}>
					<CatalogButton />
					{categoryButtons.map((value, index) => {
						return (
							<CategoryButton key={index} title={value} />
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
