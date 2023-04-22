import { FC, memo, ReactNode } from 'react'
import style from './Title.module.scss'

interface TitleI {
	children: ReactNode
}

const Title: FC<TitleI> = ({ children }) => {
	return <h3 className={style.title}>{children}</h3>
}

export default memo(Title)
