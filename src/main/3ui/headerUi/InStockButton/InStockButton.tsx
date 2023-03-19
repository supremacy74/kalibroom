import { memo, FC } from 'react'
import style from './styles/InStockButton.module.scss'

interface InStockButtonProps {
	className?: string
}

const InStockButton: FC<InStockButtonProps> = props => {
	return (
		<button
			className={`${style.inStockButton} ${props.className}`}>
			В наличии
		</button>
	)
}

InStockButton.displayName = 'InStockButton'
export default memo(InStockButton)
