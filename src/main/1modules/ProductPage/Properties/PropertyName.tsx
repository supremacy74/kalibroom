import {FC, memo, ReactNode} from 'react'
import style from '@/main/1modules/ProductPage/Properties/Properties.module.scss'

interface PropertyI {
	children?: ReactNode
}

const PropertyName: FC<PropertyI> = props => {
	return <span className={style.propertyName}>{props.children}</span>
}

export default memo(PropertyName)
