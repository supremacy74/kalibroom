import {CSSProperties, FC, memo} from 'react'
import style from './Radio.module.scss'

interface RadioI {
	name: string
	onChange: CallableFunction
	value: number
	index: number
	title?: string
	labelStyle?: CSSProperties
}

const Radio: FC<RadioI> = props => {
	return (
		<label className={style.label} style={props.labelStyle}>
			{props.title && <span className={style.title}>{props.title}</span>}
			<input
				className={style.input}
				name={props.name}
				type='radio'
				value={props.value}
				onChange={() => props.onChange()}
			/>
		</label>
	)
}

export default memo(Radio)
