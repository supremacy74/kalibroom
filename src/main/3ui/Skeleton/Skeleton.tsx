import { FC, memo } from 'react'
import style from './styles/Skeleton.module.scss'

interface SkeletonI {
	className?: string
}

const Skeleton: FC<SkeletonI> = props => {
	return <div className={`${style.skeleton} ${props.className}`} />
}

Skeleton.displayName = 'Skeleton'
export default memo(Skeleton)
