import { categoriesI } from '@/main/1modules/Header/BottomHeaderPart'
import { FC, memo } from 'react'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import style from './styles/CategoryButton.module.scss'
import Image from 'next/image'
import {
	rightArrowDarkIcon,
	rightArrowIcon,
} from '@/helpers/importIcons'
import { setCatalogCategoryIndex } from '@/store/reducers/catalog'

interface CatalogButtonI {
	index: number
	buttonValues: categoriesI
}

const CategoryButton: FC<CatalogButtonI> = props => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)
	const indexOfCurrentCategory = useAppSelector(
		state => state.catalog.indexOfCurrentCategory
	)

	const dispatch = useAppDispatch()

	return (
		<button
			style={
				indexOfCurrentCategory === props.index
					? { background: 'var(--colorSmokyWhite)' }
					: {}
			}
			onClick={() =>
				dispatch(setCatalogCategoryIndex(props.index))
			}
			className={style.category}>
			<span className={style.categoryName}>
				{props.buttonValues.title}
			</span>
			{!theme && (
				<Image
					src={rightArrowIcon}
					alt={'rightArrowIcon'}
				/>
			)}
			{theme && (
				<Image
					src={rightArrowDarkIcon}
					alt={'rightArrowDarkIcon'}
				/>
			)}
		</button>
	)
}

CategoryButton.displayName = 'CategoryButton'
export default memo(CategoryButton)
