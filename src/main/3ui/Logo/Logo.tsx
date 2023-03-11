import { FC, memo } from 'react'
import style from './styles/Logo.module.scss'
import Image from 'next/image'
import {
	logoIcon, logoIconDark, logoTextDarkIcon,
	logoTextIcon,
} from '@/helpers/importIcons'
import { motion } from 'framer-motion'

interface LogoProps {
	logoWithoutText?: boolean
	className?: string
	isDarkTheme?: boolean
}

const Logo: FC<LogoProps> = props => {
	return (
		<motion.div
			className={`${style.logo} ${props.className}`}>
			{!props.isDarkTheme && (
				<>
					<Image src={logoIcon} alt={'logo'} />
					{!props.logoWithoutText && (
						<motion.div
							className={style.logoTextWrapper}>
							<Image src={logoTextIcon} alt={'logoText'} />
						</motion.div>
					)}
				</>
			)}
			{props.isDarkTheme && (
				<>
					<Image src={logoIconDark} alt={'logo'} />
					{!props.logoWithoutText && (
						<motion.div
							className={style.logoTextWrapper}>
							<Image src={logoTextDarkIcon} alt={'logoText'} />
						</motion.div>
					)}
				</>
			)}
		</motion.div>
	)
}

Logo.displayName = 'Logo'
export default memo(Logo)
