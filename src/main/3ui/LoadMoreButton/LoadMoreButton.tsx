import { FC, memo } from 'react'
import style from './styles/LoadMoreButton.module.scss'

interface LoadMoreButtonI {
	onClick?: CallableFunction
}

const LoadMoreButton: FC<LoadMoreButtonI> = props => {
	return (
		<div className={style.wrapper}>
			<button
				onClick={() => props.onClick && props.onClick()}
				className={style.button}>
				Загрузить ещё
			</button>
		</div>
	)
}

export default memo(LoadMoreButton)
