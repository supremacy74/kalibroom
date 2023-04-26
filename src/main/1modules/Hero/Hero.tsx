import { FC } from 'react'
import style from './Hero.module.scss'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import ButtonWithArrow from "@/main/3ui/Buttons/ButtonWithArrow/ButtonWithArrow";

const Title: FC = () => {
	return (
		<h3
			// variants={titleV}
			// {...getCommonAnimation()}
			// transition={getSpringTransition(25, 100)}
			className={style.title}>
			Переключайтесь между товарами и идеями, чтобы перейти
			в каталог товаров, либо посмотреть идеи для
			вдохновения
		</h3>
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
				<ButtonWithArrow text={'Товары'} href={'/products'} disabled={false} />
				<ButtonWithArrow text={'Идеи'} href={'/ideas'} disabled={false} />
			</div>
		</div>
	)
}

Hero.displayName = 'Hero'
export default Hero
