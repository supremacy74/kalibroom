import { FC, memo } from 'react'
import style from './styles/Logo.module.scss'
import Image from 'next/image'
import {
	logoIcon,
	logoIconDark,
	logoTextDarkIcon,
	logoTextIcon,
} from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'

interface LogoProps {
	logoWithoutText?: boolean
	className?: string
}

const Logo: FC<LogoProps> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<Link
			href={'/'}
			className={`${style.logo} ${props.className}`}>
			{!theme && <LightThemeLogo {...props} />}
			{theme && <DarkThemeLogo {...props} />}
		</Link>
	)
}

const LightThemeLogo: FC<LogoProps> = props => {
	return (
		<>
			<Image src={logoIcon} alt={'logo'} />
			{!props.logoWithoutText && (
				<motion.div className={style.logoTextWrapper}>
					<Image src={logoTextIcon} alt={'logoText'} />
				</motion.div>
			)}
		</>
	)
}

const DarkThemeLogo: FC<LogoProps> = props => {
	return (
		<>
			<Image src={logoIconDark} alt={'logo'} />
			{!props.logoWithoutText && (
				<motion.div className={style.logoTextWrapper}>
					<Image src={logoTextDarkIcon} alt={'logoText'} />
				</motion.div>
			)}
		</>
	)
}

Logo.displayName = 'Logo'
export default memo(Logo)
