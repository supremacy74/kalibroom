import { FC, memo, useState } from 'react'
import style from './MayLike.module.scss'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'

interface MayLikeProps {

}

const MayLike: FC<MayLikeProps> = () => {

	const loadMore = () => {
		// setArray(prev => [...prev, ...arrayOfProducts])
	}

  return (
    <div className={style.mayLike}>
			<h3 className={style.title}>
				Вам также может понравиться
			</h3>
			{/*<ContainerForCells array={array} />*/}
			<LoadMoreButton onClick={loadMore} />
		</div>
  )
}

MayLike.displayName = 'MayLike'
export default memo(MayLike)