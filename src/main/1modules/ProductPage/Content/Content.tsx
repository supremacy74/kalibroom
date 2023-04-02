import { FC, memo } from 'react'
import WrapperInner from '@/main/3ui/WrapperInner/WrapperInner'
import style from './styles/Content.module.scss'
import MainContent from '@/main/1modules/ProductPage/MainContent/MainContent'

const Content: FC = () => {
	return (
		<WrapperInner className={style.content}>
			<MainContent />
		</WrapperInner>
	)
}

export default memo(Content)
