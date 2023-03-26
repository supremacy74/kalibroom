import { FC, memo } from 'react'
import style from './styles/ImageNotFound.module.scss'

interface ImageNotFoundBlockProps {
	height: string
}

const ImageNotFoundBlock: FC<
	ImageNotFoundBlockProps
> = props => {
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
