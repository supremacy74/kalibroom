import { FC, memo, ReactNode } from 'react'
import style from './styles/WideButton.module.scss'

interface WideButtonI {
	onClick?: CallableFunction
	children?: ReactNode
	active?: boolean
}

const WideButton: FC<WideButtonI> = props => {
	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			data-active={props.active}
			className={style.button}>
			{props.children}
		</button>
	)
}

WideButton.displayName = 'WideButton'
export default memo(WideButton)
