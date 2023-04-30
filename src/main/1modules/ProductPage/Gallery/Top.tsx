import { FC } from 'react'
import style from './Gallery.module.scss'
import CircleOutlineButton from '@/main/3ui/CircleOutlineButton/CircleOutlineButton'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { crossDarkIcon, crossIcon } from '@/helpers/importIcons'
import { handleGallery } from '@/store/reducers/products/productPage'

const Top: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	const dispatch = useAppDispatch()

	return (
		<div className={style.top}>
			<span className={style.counter}>
        1/2
      </span>
			<CircleOutlineButton
				onClick={() => dispatch(handleGallery(false))}
				icon={theme ? crossDarkIcon : crossIcon}
			/>
		</div>
	)
}

export default Top
