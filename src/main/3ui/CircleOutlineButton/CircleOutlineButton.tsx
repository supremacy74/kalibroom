import {CSSProperties, FC, memo} from 'react'
import style from './CircleOutlineButton.module.scss'
import Image from 'next/image'

interface CircleOutlineButtonI {
	icon: string
	onClick?: Function
	style?: CSSProperties
}

const CircleOutlineButton: FC<CircleOutlineButtonI> = props => {
	return (
		<button
			style={props.style}
			className={style.button}
			onClick={() => props.onClick && props.onClick()}>
			<Image src={props.icon} alt={'icon'} />
		</button>
	)
}

export default memo(CircleOutlineButton)
