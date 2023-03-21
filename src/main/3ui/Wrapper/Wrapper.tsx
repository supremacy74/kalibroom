import {FC, memo, ReactNode, useEffect} from 'react'
import style from './styles/Wrapper.module.scss'
import {useAppDispatch} from "@/store/hooks";
import {useTheme} from "@/helpers/useTheme";

interface WrapperProps {
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	useTheme()

	return (
		<div className={style.outerWrapper}>
			<div className={style.innerWrapper}>
				{props.children}
			</div>
		</div>
	)
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
