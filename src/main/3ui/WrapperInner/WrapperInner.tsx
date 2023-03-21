import {FC, memo, ReactNode} from "react";
import style from './styles/WrapperInner.module.scss'

interface WrapperInnerI {
	children?: ReactNode
	className?: string
}

const WrapperInner: FC<WrapperInnerI> = props => {
	return (
		<div className={`${style.content} ${props.className}`}>
			{props.children}
		</div>
	)
}

export default memo(WrapperInner)