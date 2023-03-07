import {FC, memo, ReactNode} from 'react'
import style from './styles/Wrapper.module.scss'

interface WrapperProps {
  children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
	return (
    <div className={style.outerWrapper}>
      <div className={style.innerWrapper}>
        {props.children}
      </div>
    </div>
  )
}

Wrapper.displayName = 'Wrapper'
export default memo(Wrapper)
