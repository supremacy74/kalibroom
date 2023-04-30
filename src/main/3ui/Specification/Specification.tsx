import { FC, memo } from 'react'
import style from './Specification.module.scss'

interface SpecificationI {
	name: string
	value: string
}

const Specification: FC<SpecificationI> = props => {
	return (
		<div className={style.main}>
			<div className={style.name}>{props.name}</div>
      <div className={style.dots} />
			<div className={style.value}>{props.value}</div>
		</div>
	)
}

export default memo(Specification)
