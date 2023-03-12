import { FC, memo } from 'react'
import style from './styles/CatalogButton.module.scss'
import { motion } from 'framer-motion'
import {
	hamburgerStick1V,
	hamburgerStick2V,
	hamburgerStick3V,
} from './styles/variants'
import { getSpringTransition } from '@/helpers/animations'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { toggleCatalogMenu } from '@/store/reducers/catalog'

const CatalogButton: FC = () => {
	const catalogIsOpen = useAppSelector(
		state => state.catalog.isOpen
	)

	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() => dispatch(toggleCatalogMenu())}
			className={style.catalogButton}>
			Каталог
			<div className={style.hamburgerIcon}>
				<motion.div
					variants={hamburgerStick1V}
					animate={catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick2V}
					animate={catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick3V}
					animate={catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
			</div>
		</button>
	)
}

CatalogButton.displayName = 'CatalogButton'
export default memo(CatalogButton)
