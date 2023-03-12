import {
	Dispatch,
	FC,
	memo,
	SetStateAction, useEffect,
	useState,
} from 'react'
import style from './styles/CircleButton.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CircleButtonProps {
	icon?: string
	hoverIcon?: string
	activeIcon?: string
	onClick?: CallableFunction
	className?: string
	isActive?: boolean
	handleActive?: Dispatch<SetStateAction<boolean>>
}

const CircleButton: FC<CircleButtonProps> = props => {
	const [isHover, handleHover] = useState<boolean>(false)

	return (
		<button
			style={
				props.isActive
					? { background: 'var(--colorAccent)' }
					: { background: '#252525' }
			}
			onMouseEnter={() => handleHover(true)}
			onMouseLeave={() => handleHover(false)}
			onClick={() => {
				props.onClick && props.onClick()
				props.handleActive &&
					props.handleActive(prev => !prev)
			}}
			className={`${style.button} ${props.className}`}>
			{props.icon && (
				<Image
					className={style.icon}
					src={props.icon}
					alt={'icon'}
				/>
			)}
			{props.hoverIcon && isHover && (
				<Image
					className={style.icon}
					src={props.hoverIcon}
					alt={'icon'}
				/>
			)}
			{props.activeIcon && props.isActive && (
				<Image
					className={style.icon}
					src={props.activeIcon}
					alt={'icon'}
				/>
			)}
		</button>
	)
}

CircleButton.displayName = 'CircleButton'
export default memo(CircleButton)
