import { Dispatch, FC, memo, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import style from './styles/BottomHeaderPart.module.scss'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import CategoryButton from '@/main/3ui/headerUi/CategoryButton/CategoryButton'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import ThemeSlider from '@/main/3ui/headerUi/ThemeSlider/ThemeSlider'
import { bottomHeaderPartV } from '@/main/2components/BottomHeaderPart/styles/variants'
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'

interface BottomHeaderPartProps {
	bottomPartVisible: boolean
	catalogIsOpen: boolean
	handleCatalog: Dispatch<SetStateAction<boolean>>
	isDarkTheme: boolean
	handleTheme: Dispatch<SetStateAction<boolean>>
}

const BottomHeaderPart: FC<
	BottomHeaderPartProps
> = props => {
	const categoryButtons = [
		'диваны',
		'кровати',
		'столы',
		'стулья',
		'кресла',
	]

	return (
		<AnimatePresence>
			{props.bottomPartVisible && (
				<motion.div
					variants={bottomHeaderPartV}
					{...getCommonAnimation()}
					transition={{
						duration: .3,
						ease: 'easeInOut',
					}}
					className={style.part}>
					<CatalogButton
						catalogIsOpen={props.catalogIsOpen}
						handleCatalog={props.handleCatalog}
					/>
					{categoryButtons.map((value, index) => {
						return (
							<CategoryButton key={index} title={value} />
						)
					})}
					<InStockButton />
					<ThemeSlider
						handleTheme={props.handleTheme}
						isDarkTheme={props.isDarkTheme}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

BottomHeaderPart.displayName = 'BottomHeaderPart'
export default memo(BottomHeaderPart)
