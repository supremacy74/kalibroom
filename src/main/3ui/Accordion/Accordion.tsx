import { FC, memo, ReactNode, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import style from './Accordion.module.scss'
import Image from 'next/image'
import { vectorDownDarkIcon, vectorDownIcon } from '@/helpers/importIcons'
import { getCommonAnimation } from '@/helpers/animations'
import PropertyName from '@/main/1modules/ProductPage/Properties/PropertyName'

interface AccordionI extends Partial<Pick<HTMLDivElement, 'className'>> {
	name: string
	children?: ReactNode
}

const Accordion: FC<AccordionI> = props => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)
	const [isExpand, handleExpand] = useState(false)

	const bottomVariants: Variants = {
		on: {
			height: 'auto',
			marginBottom: '1.5rem',
		},
		off: {
			height: '0',
			marginBottom: '0rem',
		},
	}

	return (
		<div className={style.accordion}>
			<button
				onClick={() => handleExpand(prev => !prev)}
				className={style.accordionTop}>
				<PropertyName>{props.name}</PropertyName>
				<div data-is-expand={isExpand} className={style.accordionImageWrapper}>
					{!theme && <Image src={vectorDownIcon} alt={'vectorDownIcon'} />}
					{theme && (
						<Image src={vectorDownDarkIcon} alt={'vectorDownDarkIcon'} />
					)}
				</div>
			</button>
			<AnimatePresence>
				{isExpand && (
					<motion.div
						{...getCommonAnimation()}
						variants={bottomVariants}>
						<div className={`${style.accordionBottom} ${props.className}`}>
							{props.children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default memo(Accordion)
