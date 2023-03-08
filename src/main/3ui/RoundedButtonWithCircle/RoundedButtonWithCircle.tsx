import {FC, memo, ReactNode} from 'react'
import style from './styles/RoundedButtonWithCircle.module.scss'
import Image from 'next/image'
import { vectorImage } from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import {circleV} from "@/main/3ui/RoundedButtonWithCircle/styles/variants";

interface RoundedButtonWithCircleProps {
	isActive?: boolean
	onClick?: CallableFunction
	children?: ReactNode
}

const RoundedButtonWithCircle: FC<
	RoundedButtonWithCircleProps
> = props => {
	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			className={style.button}>
			<div className={style.name}>{props.children}</div>
			<motion.div
				variants={circleV}
				animate={props.isActive ? 'on' : 'off'}
				transition={{
					duration: .3,
					ease: 'easeInOut',
				}}
				className={style.circle}>
				<Image

					className={style.icon}
					src={vectorImage}
					alt={'vectorImage'}
				/>
			</motion.div>
		</button>
	)
}

RoundedButtonWithCircle.displayName =
	'RoundedButtonWithCircle'
export default memo(RoundedButtonWithCircle)
