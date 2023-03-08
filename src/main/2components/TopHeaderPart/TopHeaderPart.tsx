import { Dispatch, FC, memo, SetStateAction } from 'react'
import style from './styles/TopHeaderPart.module.scss'
import Logo from '@/main/3ui/Logo/Logo'
import ContactsPanel from '@/main/3ui/headerUi/ContactsPanel/ContactsPanel'
import DeliveryPanel from '@/main/3ui/headerUi/DeliveryPanel/DeliveryPanel'
import TopRightPanel from '@/main/3ui/headerUi/TopRightPanel/TopRightPanel'
import { motion } from 'framer-motion'
interface TopHeaderPartProps {
	isDarkTheme: boolean
	bottomPartVisible: boolean
	catalogIsOpen: boolean
	handleCatalog: Dispatch<SetStateAction<boolean>>
}

const TopHeaderPart: FC<TopHeaderPartProps> = props => {
	return (
		<div className={style.part}>
			<div className={style.logoWrapper}>
				<Logo
					className={style.logo}
					isDarkTheme={props.isDarkTheme}
					// logoWithoutText={!props.bottomPartVisible}
				/>
			</div>
			<ContactsPanel />
			<DeliveryPanel />
			<TopRightPanel />
		</div>
	)
}

TopHeaderPart.displayName = 'TopHeaderPart'
export default memo(TopHeaderPart)
