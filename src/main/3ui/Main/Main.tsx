import { FC, memo, ReactNode } from 'react'
import style from './styles/Main.module.scss'

interface MainI {
	children?: ReactNode
}

const Main: FC<MainI> = props => {
	return (
		<main className={style.main}>{props.children}</main>
	)
}

Main.displayName = 'Main'
export default memo(Main)
