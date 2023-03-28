import { FC, memo } from 'react'
import style from './styles/Skeleton.module.scss'

const Skeleton: FC = () => {
	return <div className={style.skeleton} />
}

Skeleton.displayName = 'Skeleton'
export default memo(Skeleton)
