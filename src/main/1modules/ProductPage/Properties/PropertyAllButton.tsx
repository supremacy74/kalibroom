import { FC, memo, ReactNode } from 'react'
import style from '@/main/1modules/ProductPage/Properties/Properties.module.scss'

interface PropertyAllI {
	onClick: CallableFunction
	children?: ReactNode
}

const PropertyAll: FC<PropertyAllI> = props => {
	return (
		<button className={style.propertyLink} onClick={() => props.onClick()}>
			{props.children}
		</button>
	)
}

export default memo(PropertyAll)
