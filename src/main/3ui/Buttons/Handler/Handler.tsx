import { motion } from 'framer-motion'
import { FC, memo } from 'react'
import style from './Handler.module.scss'
import {getSpringTransition} from "@/helpers/animations";

interface RadioHandlerI {
	name: string
	onChange: CallableFunction
	value: boolean
}

const Handler: FC<RadioHandlerI> = props => {
	return (
		<label
			data-is-active={props.value}
			className={style.labelHandler}>
			<motion.input
				layout={true}
				className={style.inputHandler}
				name={props.name}
				checked={props.value}
				transition={getSpringTransition(20, 140)}
				onChange={() => props.onChange()}
				type='checkbox'
			/>
		</label>
	)
}

export default memo(Handler)
