import { FC, memo } from 'react'
import style from './styles/ContactsPanel.module.scss'
import Image from 'next/image'
import {
	locationIcon,
	phoneIcon,
} from '@/helpers/importIcons'

const ContactsPanel: FC = () => {
	return (
		<div className={style.contacts}>
			<div className={style.contactsLeft}>
				<div className={style.phone}>
					<span className={style.phoneText}>
						+7 999 999-99-99
					</span>
					<Image src={phoneIcon} alt={'phoneIcon'} />
				</div>
				<div className={style.time}>пн-пт с 9 до 21</div>
			</div>
			<div className={style.location}>
				<span className={style.locationText}>Москва</span>
				<Image src={locationIcon} alt={'location'} />
			</div>
		</div>
	)
}

ContactsPanel.displayName = 'ContactsPanel'
export default memo(ContactsPanel)
