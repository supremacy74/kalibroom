import {
	createContext,
	FC,
	memo,
	ReactNode,
	useContext,
	useEffect,
} from 'react'
import style from './styles/RoundedButtonWithCircle.module.scss'
import Image from 'next/image'
import {
	vectorTopDarkImage,
	vectorTopImage,
} from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import { circleV } from '@/main/3ui/RoundedButtonWithCircle/styles/variants'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface RoundedButtonWithCircleProps {
	link: string
	children?: ReactNode
}

const RoundedButtonWithCircle: FC<
	RoundedButtonWithCircleProps
> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const router = useRouter()

	const getCurrentRouter = () => {
		return router.pathname === props.link
	}

	getCurrentRouter()

	return (
		<Link href={props.link} className={style.button}>
			<div
				style={
					getCurrentRouter()
						? {
								background: 'var(--colorAccent)',
								color: theme
									? 'var(--colorBackground)'
									: 'var(--colorSignalBlack)',
								border: 'transparent solid 1px',
						  }
						: {
								border: 'var(--colorSignalBlack) solid 1px',
						  }
				}
				className={style.name}>
				{props.children}
			</div>
			<motion.div
				variants={circleV}
				custom={theme}
				animate={getCurrentRouter() ? 'on' : 'off'}
				transition={{
					duration: 0.3,
					ease: 'easeInOut',
				}}
				className={style.circle}>
				{!theme && !getCurrentRouter() && (
					<Image
						className={style.icon}
						src={vectorTopImage}
						alt={'vectorImage'}
					/>
				)}
				{(theme || getCurrentRouter()) && (
					<Image
						className={style.icon}
						src={vectorTopDarkImage}
						alt={'vectorImage'}
					/>
				)}
			</motion.div>
		</Link>
	)
}

RoundedButtonWithCircle.displayName =
	'RoundedButtonWithCircle'
export default memo(RoundedButtonWithCircle)
