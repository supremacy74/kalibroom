import { FC, memo, useState } from 'react'
import style from './styles/CategoryButton.module.scss'
import { motion } from 'framer-motion'
import { vectorDownV } from './styles/variants'
import { getSpringTransition } from '@/helpers/animations'
import Image from 'next/image'
import { vectorDownIcon } from '@/helpers/importIcons'

interface CategoryButtonI {
	title: string
}

const CategoryButton: FC<CategoryButtonI> = props => {
	const [isOpen, handleOpen] = useState<boolean>(false)

	return (
		<button
			onClick={() => handleOpen(prev => !prev)}
			className={style.categoryButton}>
			{props.title}
			<motion.div
				variants={vectorDownV}
				animate={isOpen ? 'on' : 'off'}
				transition={getSpringTransition(30, 185)}
				className={style.iconWrapper}>
				<Image
					className={style.icon}
					src={vectorDownIcon}
					alt={'vectorDownIcon'}
				/>
			</motion.div>
		</button>
	)
}

CategoryButton.displayName = 'CategoryButton'
export default memo(CategoryButton)
