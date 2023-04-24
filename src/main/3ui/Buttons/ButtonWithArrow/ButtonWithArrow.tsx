import { FC, memo } from 'react'
import style from './ButtonWithArrow.module.scss'
import Image from 'next/image'
import { vectorTopDarkImage, vectorTopImage } from '@/helpers/importIcons'
import { useAppSelector } from '@/store/hooks'
import Link from "next/link";

interface ButtonWithArrowI {
	value?: boolean
	onClick?: CallableFunction
	text: string
	disabled: boolean
	href?: string
}

const ButtonWithArrow: FC<ButtonWithArrowI> = props => {
	if (props.href) {
		return  (
			<Link
				data-is-active={props.value}
				data-disabled={props.disabled}
				href={props.href}
				className={style.buttonWrapper}>
				<Inner text={props.text} />
			</Link>
		)
	} else if (props.onClick) {
		return  (
			<button
				data-is-active={props.value}
				data-disabled={props.disabled}
				onClick={() => props.onClick && props.onClick()}
				className={style.buttonWrapper}>
				<Inner text={props.text} />
			</button>
		)
	} else {
		return  (
			<div>
				buttonWithCircle должна иметь соответствующие props
			</div>
		)
	}
}

const Inner: FC<{ text: string }> = ({ text }) => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	return (
		<>
			<div className={style.text}>{text}</div>
			<div className={style.circle}>
				{!theme ? (
					<Image src={vectorTopImage} alt={'vectorTopImage'} />
				) : (
					<Image src={vectorTopDarkImage} alt={'vectorTopDarkImage'} />
				)}
			</div>
		</>
	)
}

export default memo(ButtonWithArrow)
