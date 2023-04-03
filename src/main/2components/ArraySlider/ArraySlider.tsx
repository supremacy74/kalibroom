import { FC, memo, ReactNode, useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import style from './styles/ArraySlider.module.scss'
import Image from 'next/image'
import { rightArrowDarkIcon, rightArrowIcon } from '@/helpers/importIcons'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'

interface ArraySliderI {
	title: string
	array: any[]
	children: ReactNode
}

const ArraySlider: FC<ArraySliderI> = props => {
	const [currentSlide, setSlide] = useState(0)
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	const leftSlide = () => {
		if (currentSlide >= 1) {
			setSlide(prev => prev - 1)
		}
	}

	const rightSlide = () => {
		if (currentSlide <= props.array.length - 4) {
			setSlide(prev => prev + 1)
		}
	}

	return (
		<div className={style.arraySlider}>
			<div className={style.top}>
				<h3 className={style.title}>{props.title}</h3>
				<div className={style.buttons}>
					<button
						disabled={!(currentSlide >= 1)}
						onClick={leftSlide}
						className={`${style.slideButton} ${style.slideLeft}`}>
						{!theme && (
							<Image
								src={rightArrowIcon}
								alt={'rightArrowIcon'}
							/>
						)}
						{theme && (
							<Image
								src={rightArrowDarkIcon}
								alt={'rightArrowDarkIcon'}
							/>
						)}
					</button>
					<button
						disabled={
							!(currentSlide <= props.array.length - 4)
						}
						onClick={rightSlide}
						className={`${style.slideButton} ${style.slideRight}`}>
						{!theme && (
							<Image
								src={rightArrowIcon}
								alt={'rightArrowIcon'}
							/>
						)}
						{theme && (
							<Image
								src={rightArrowDarkIcon}
								alt={'rightArrowDarkIcon'}
							/>
						)}
					</button>
				</div>
			</div>
			<motion.main
				animate={{ x: `-${(currentSlide * 100) / 3}%` }}
				transition={getSpringTransition(20, 60)}
				className={style.main}>
				{props.children}
			</motion.main>
		</div>
	)
}

ArraySlider.displayName = 'ArraySlider'
export default memo(ArraySlider)