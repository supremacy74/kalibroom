import { FC, memo } from 'react'
import style from './styles/ContactsPanel.module.scss'
import Image from 'next/image'
import {
	locationDarkIcon,
	locationIcon, phoneDarkIcon,
	phoneIcon,
} from '@/helpers/importIcons'
import {useAppSelector} from "@/store/hooks";

const ContactsPanel: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	return (
		<div className={style.contacts}>
			<div className={style.contactsLeft}>
				<div className={style.phone}>
					<span className={style.phoneText}>
						+7 999 999-99-99
					</span>
					{!theme && (
						<Image src={phoneIcon} alt={'phoneIcon'} />
					)}
					{theme && (
						<Image src={phoneDarkIcon} alt={'phoneIcon'} />
					)}
				</div>
				<div className={style.time}>пн-пт с 9 до 21</div>
			</div>
			<div className={style.location}>
				<span className={style.locationText}>Москва</span>
				{!theme && (
					<Image src={locationIcon} alt={'location'} />
				)}
				{theme && (
					<Image src={locationDarkIcon} alt={'location'} />
				)}
			</div>
		</div>
	)
}

ContactsPanel.displayName = 'ContactsPanel'
export default memo(ContactsPanel)
