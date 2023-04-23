import { FC, memo } from 'react'
import style from './styles/Hero.module.scss'
import RoundedButtonWithCircle from '@/main/3ui/RoundedButtonWithCircle/RoundedButtonWithCircle'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import {
	getCommonAnimation,
	getSpringTransition,
} from '@/helpers/animations'
import { titleV } from '@/main/1modules/Hero/styles/variants'

const Title: FC = () => {
	return (
		<motion.h3
			variants={titleV}
			{...getCommonAnimation()}
			// transition={getSpringTransition(25, 100)}
			className={style.title}>
			Переключайтесь между товарами и идеями, чтобы перейти
			в каталог товаров, либо посмотреть идеи для
			вдохновения
		</motion.h3>
	)
}

const Hero: FC = props => {
	const router = useRouter()

	return (
		<div className={style.hero}>
			<AnimatePresence>
				{router.pathname === '/' && <Title />}
			</AnimatePresence>
			<div className={style.buttons}>
				<RoundedButtonWithCircle link={'/products'}>
					Товары
				</RoundedButtonWithCircle>
				<RoundedButtonWithCircle link={'/ideas'}>
					Идеи
				</RoundedButtonWithCircle>
			</div>
		</div>
	)
}

Hero.displayName = 'Hero'
export default memo(Hero)
