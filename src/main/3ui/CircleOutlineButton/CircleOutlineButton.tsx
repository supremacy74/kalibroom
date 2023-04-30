import { FC, memo } from 'react'
import style from './CircleOutlineButton.module.scss'
import Image from 'next/image'

interface CircleOutlineButtonI {
	icon: string
	onClick?: Function
}

const CircleOutlineButton: FC<CircleOutlineButtonI> = props => {
	return (
		<button
			className={style.button}
			onClick={() => props.onClick && props.onClick()}>
			<Image src={props.icon} alt={'icon'} />
		</button>
	)
}

export default memo(CircleOutlineButton)
