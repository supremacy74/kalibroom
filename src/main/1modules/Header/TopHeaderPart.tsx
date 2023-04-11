import { FC, memo } from 'react'
import style from './styles/TopHeaderPart.module.scss'
import Logo from '@/main/3ui/Logo/Logo'
import ContactsPanel from '@/main/3ui/headerUi/ContactsPanel/ContactsPanel'
import DeliveryPanel from '@/main/3ui/headerUi/DeliveryPanel/DeliveryPanel'
import TopRightPanel from '@/main/3ui/headerUi/TopRightPanel/TopRightPanel'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import { useAppSelector } from '@/store/hooks'
import InStockButton from "@/main/3ui/headerUi/InStockButton/InStockButton";

const TopHeaderPart: FC = () => {
	const headerBottomPartIsVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)

	return (
		<div className={style.part}>
			<div
				className={style.logoWrapper}
				data-bottom-is-visible={headerBottomPartIsVisible}>
				<Logo
					className={style.logo}
					logoWithoutText={!headerBottomPartIsVisible}
				/>
				{!headerBottomPartIsVisible && (
					<CatalogButton className={style.catalogButton} />
				)}
			</div>
			<ContactsPanel />
			{headerBottomPartIsVisible && (
				<DeliveryPanel />
			)}
			{!headerBottomPartIsVisible && (
				<InStockButton className={style.inStockButton}/>
			)}
			<TopRightPanel />
		</div>
	)
}

TopHeaderPart.displayName = 'TopHeaderPart'
export default memo(TopHeaderPart)
