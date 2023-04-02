import {
	Dispatch,
	FC,
	memo,
	SetStateAction,
	useEffect,
} from 'react'
import style from './styles/ImageNotFound.module.scss'

interface ImageNotFoundBlockProps {
	height?: string
	onLoad?: Dispatch<SetStateAction<boolean>>
}

const ImageNotFoundBlock: FC<
	ImageNotFoundBlockProps
> = props => {
	useEffect(() => {
		props.onLoad && props.onLoad(true)
	}, [])

	return (
		<div
			className={style.imageNotFound}
			style={{
				height: props.height,
			}}>
			image not found
		</div>
	)
}

ImageNotFoundBlock.displayName = 'ImageNotFoundBlock'
export default memo(ImageNotFoundBlock)
