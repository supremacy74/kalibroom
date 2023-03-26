import { FC, memo } from 'react'
import { useAppSelector } from '@/store/hooks'
import style from './styles/Location.module.scss'
import Image from 'next/image'
import {
	locationDarkIcon,
	locationIcon,
} from '@/helpers/importIcons'

interface LocationI {
	className?: string
}

const Location: FC<LocationI> = (props) => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<div className={`${style.location} ${props.className}`}>
			<span className={style.locationText}>Москва</span>
			{!theme && (
				<Image src={locationIcon} alt={'location'} />
			)}
			{theme && (
				<Image src={locationDarkIcon} alt={'location'} />
			)}
		</div>
	)
}

Location.displayName = 'Location'
export default memo(Location)
