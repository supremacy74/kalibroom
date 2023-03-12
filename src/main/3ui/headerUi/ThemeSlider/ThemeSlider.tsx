import { FC, memo } from 'react'
import style from './styles/ThemeSlider.module.scss'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import Image from 'next/image'
import { moonIcon, sunIcon } from '@/helpers/importIcons'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { toggleDarkTheme } from '@/store/reducers/theme'

const ThemeSlider: FC = () => {
	const isDarkTheme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const dispatch = useAppDispatch()

	return (
		<div className={style.slideButtonWrapper}>
			<motion.button
				onClick={() => dispatch(toggleDarkTheme())}
				data--isOn={isDarkTheme}
				className={style.slideButton}>
				<motion.div
					layout
					transition={getSpringTransition(30, 185)}
					className={style.slideCircle}>
					<Image
						className={style.slideLeftImage}
						src={moonIcon}
						alt={'moonIcon'}
					/>
					<Image
						className={style.slideRightImage}
						src={sunIcon}
						alt={'sunIcon'}
					/>
				</motion.div>
			</motion.button>
		</div>
	)
}

ThemeSlider.displayName = 'ThemeSlider'
export default memo(ThemeSlider)
