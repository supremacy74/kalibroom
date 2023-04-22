import { motion } from 'framer-motion'
import { CSSProperties, FC, memo, ReactNode } from 'react'
import style from './Popup.module.scss'
import { popupV } from '@/main/3ui/Popups/variants'
import { getCommonAnimation, getEaseAnimation } from '@/helpers/animations'

interface PopupWrapper {
	children: ReactNode
	style?: CSSProperties
}

const PopupWrapper: FC<PopupWrapper> = props => {
	return (
		<motion.div
			variants={popupV}
			{...getCommonAnimation()}
			transition={getEaseAnimation()}
			style={props.style}
			className={style.wrapper}>
			{props.children}
		</motion.div>
	)
}

export default memo(PopupWrapper)
