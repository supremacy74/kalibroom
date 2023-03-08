import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/CatalogButton.module.scss'
import { motion } from 'framer-motion'
import {
	hamburgerStick1V,
	hamburgerStick2V,
	hamburgerStick3V,
} from './styles/variants'
import { getSpringTransition } from '@/helpers/animations'

interface CatalogButtonI {
	catalogIsOpen: boolean
	handleCatalog: Dispatch<SetStateAction<boolean>>
}

const CatalogButton: FC<CatalogButtonI> = props => {
	return (
		<button
			onClick={() => props.handleCatalog(prev => !prev)}
			className={style.catalogButton}>
			Каталог
			<div className={style.hamburgerIcon}>
				<motion.div
					variants={hamburgerStick1V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick2V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick3V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
			</div>
		</button>
	)
}

CatalogButton.displayName = 'CatalogButton'
export default memo(CatalogButton)
