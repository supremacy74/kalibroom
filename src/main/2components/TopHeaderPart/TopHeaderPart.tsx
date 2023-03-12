import { FC, memo } from 'react'
import style from './styles/TopHeaderPart.module.scss'
import Logo from '@/main/3ui/Logo/Logo'
import ContactsPanel from '@/main/3ui/headerUi/ContactsPanel/ContactsPanel'
import DeliveryPanel from '@/main/3ui/headerUi/DeliveryPanel/DeliveryPanel'
import TopRightPanel from '@/main/3ui/headerUi/TopRightPanel/TopRightPanel'

const TopHeaderPart: FC = props => {
	return (
		<div className={style.part}>
			<div className={style.logoWrapper}>
				<Logo className={style.logo} />
			</div>
			<ContactsPanel />
			<DeliveryPanel />
			<TopRightPanel />
		</div>
	)
}

TopHeaderPart.displayName = 'TopHeaderPart'
export default memo(TopHeaderPart)
