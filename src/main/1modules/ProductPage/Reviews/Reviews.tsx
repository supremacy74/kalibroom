import {
	FC,
	memo,
} from 'react'
import style from './styles/Reviews.module.scss'
import Image from 'next/image'
import {
	starDarkIcon,
	starIcon,
} from '@/helpers/importIcons'
import { useAppSelector } from '@/store/hooks'
import { getRandom } from '@/helpers/commonFunctions'
import Link from 'next/link'
import ArraySlider from '@/main/2components/ArraySlider/ArraySlider'

interface ReviewsProps {}

const Reviews: FC<ReviewsProps> = props => {
	const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	return (
		<ArraySlider title={'Отзывы'} array={reviews}>
			{reviews.map((value, index) => {
				return <Review key={index} />
			})}
		</ArraySlider>
	)
}

const Review: FC = () => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<div className={style.review}>
			<div className={style.reviewTop}>
				<div className={style.avatar}></div>
				<div className={style.reviewTitles}>
					<h4 className={style.name}>Дарья</h4>
					<span className={style.date}>
						<span>21 ноя 2022</span>
						<span>Менее месяца</span>
					</span>
				</div>
			</div>
			<div className={style.reviewBody}>
				Привет. Это я, твой единственный покупатель. Я на
				протяжении многих лет создавал иллюзию того, что у
				тебя заказывает много людей диваны, но это был я.
				Сейчас напишу со всех аккаунтов.
			</div>
			<div className={style.reviewImages}>
				<Link className={style.reviewImageLink} href={'#'}>
					<Image
						className={style.reviewImage}
						src={`https://random.imagecdn.app/${getRandom(
							700,
							1400
						)}/${getRandom(1000, 2000)}`}
						alt={'image'}
						width={100}
						height={100}
					/>
				</Link>
				<Link className={style.reviewImageLink} href={'#'}>
					<Image
						className={style.reviewImage}
						src={`https://random.imagecdn.app/${getRandom(
							700,
							1400
						)}/${getRandom(1000, 2000)}`}
						alt={'image'}
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<div className={style.reviewBottom}>
				<div className={style.stars}>
					{!theme && (
						<>
							<Image src={starIcon} alt={'starIcon'} />
							<Image src={starIcon} alt={'starIcon'} />
							<Image src={starIcon} alt={'starIcon'} />
							<Image src={starIcon} alt={'starIcon'} />
							<Image src={starIcon} alt={'starIcon'} />
						</>
					)}
					{theme && (
						<>
							<Image
								src={starDarkIcon}
								alt={'starDarkIcon'}
							/>
							<Image
								src={starDarkIcon}
								alt={'starDarkIcon'}
							/>
							<Image
								src={starDarkIcon}
								alt={'starDarkIcon'}
							/>
							<Image
								src={starDarkIcon}
								alt={'starDarkIcon'}
							/>
							<Image
								src={starDarkIcon}
								alt={'starDarkIcon'}
							/>
						</>
					)}
				</div>
				<button className={style.complain}>
					Пожаловаться
				</button>
			</div>
		</div>
	)
}

Reviews.displayName = 'Reviews'
export default memo(Reviews)
