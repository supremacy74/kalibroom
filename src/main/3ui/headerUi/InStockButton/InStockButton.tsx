import { memo, FC } from 'react'
import style from './styles/InStockButton.module.scss'

interface InStockButtonProps {

}

const InStockButton: FC<InStockButtonProps> = props => {
  return (
    <button className={style.inStockButton}>
      в наличии
    </button>
  )
}

InStockButton.displayName = 'InStockButton'
export default memo(InStockButton)