import { FC, memo, ReactNode } from 'react'
import style from './styles/Description.module.scss'

interface DescriptionProps {
	children?: ReactNode
}

const Description: FC<DescriptionProps> = props => {
  return (
    <div className={style.description}>
			<h3 className={style.title}>
				Описание
			</h3>
			<div className={style.texts}>
				{props.children}
			</div>
		</div>
  )
}

Description.displayName = 'Description'
export default memo(Description)