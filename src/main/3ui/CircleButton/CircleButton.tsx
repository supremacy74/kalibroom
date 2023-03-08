import { FC, memo } from 'react'
import style from './styles/CircleButton.module.scss'
import Image from 'next/image'

interface CircleButtonProps {
	icon?: string
	onClick?: CallableFunction
}

const CircleButton: FC<CircleButtonProps> = props => {
	return (
		<button
			onClick={() => props.onClick && props.onClick()}
			className={style.button}>
			{props.icon && (
				<Image className={style.icon} src={props.icon} alt={'icon'} />
			)}
		</button>
	)
}

CircleButton.displayName = 'CircleButton'
export default memo(CircleButton)
