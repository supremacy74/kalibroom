import { FC, memo, useState } from 'react'
import style from './MayLike.module.scss'
import { arrayOfProducts } from '@/data/arrayOfProducts'
import ContainerForCells from '@/main/1modules/ContainerForCells/ContainerForCells'
import LoadMoreButton from '@/main/3ui/LoadMoreButton/LoadMoreButton'

interface MayLikeProps {

}

const MayLike: FC<MayLikeProps> = () => {
	const [array, setArray] = useState([...arrayOfProducts])

	const loadMore = () => {
		setArray(prev => [...prev, ...arrayOfProducts])
	}

  return (
    <div className={style.mayLike}>
			<h3 className={style.title}>
				Вам также может понравиться
			</h3>
			<ContainerForCells array={array} />
			<LoadMoreButton onClick={loadMore} />
		</div>
  )
}

MayLike.displayName = 'MayLike'
export default memo(MayLike)