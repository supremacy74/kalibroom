import {FC, memo, ReactNode, useEffect} from 'react'
import style from './styles/Wrapper.module.scss'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {useTheme} from "@/helpers/useTheme";

interface WrapperProps {
	children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	useTheme()

	const bodyOverflow = useAppSelector(state => state.bodyOverflow)

	useEffect(() => {
		console.log(bodyOverflow)
		if (!bodyOverflow) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [bodyOverflow])

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
