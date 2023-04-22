import { FC, memo, ReactNode } from 'react'
import style from './Button.module.scss'

type typeButton = 'flat' | 'outline' | 'accentFlat' | 'accentOutline'

interface typesButton {
	type: typeButton
	className: string
}

interface ButtonI {
	children: ReactNode
	type: typeButton
	disabled?: boolean
	className?: string
	width?: string
	onClick?: CallableFunction
}

const Button: FC<ButtonI> = props => {
	const types: typesButton[] = [
		{
			type: 'flat',
			className: style.flatButton,
		},
		{
			type: 'outline',
			className: style.outlineButton,
		},
		{
			type: 'accentFlat',
			className: style.accentFlatButton,
		},
		{
			type: 'accentOutline',
			className: style.accentOutlineButton,
		},
	]

	const currentType = types.filter(e => e.type === props.type)[0]

	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			style={props.width ? {width: props.width} : {}}
			className={`${style.button} ${currentType.className} ${props.className}`}
			disabled={props.disabled}>
			{props.children}
		</button>
	)
}

export default memo(Button)
