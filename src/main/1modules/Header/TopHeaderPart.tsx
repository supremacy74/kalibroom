import { FC, memo, useEffect } from 'react'
import style from './styles/TopHeaderPart.module.scss'
import Logo from '@/main/3ui/Logo/Logo'
import ContactsPanel from '@/main/3ui/headerUi/ContactsPanel/ContactsPanel'
import DeliveryPanel from '@/main/3ui/headerUi/DeliveryPanel/DeliveryPanel'
import TopRightPanel from '@/main/3ui/headerUi/TopRightPanel/TopRightPanel'
import CatalogButton from '@/main/3ui/headerUi/CatalogButton/CatalogButton'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import InStockButton from '@/main/3ui/headerUi/InStockButton/InStockButton'
import { categoryI } from '@/interfaces/category'
import { setCategories } from '@/store/reducers/header/categories'
import { getAllCategories } from '@/data/apiController'

const TopHeaderPart: FC = () => {
	const headerBottomPartIsVisible = useAppSelector(
		state => state.headerBottomPart.isVisible
	)

	const dispatch = useAppDispatch()

	const setterCategories = async (data: categoryI[]) => {
		dispatch(setCategories(data))
	}

	useEffect(() => {
		getAllCategories(setterCategories)
	}, [])

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
			{headerBottomPartIsVisible && <DeliveryPanel />}
			{!headerBottomPartIsVisible && (
				<InStockButton className={style.inStockButton} />
			)}
			<TopRightPanel />
		</div>
	)
}

TopHeaderPart.displayName = 'TopHeaderPart'
export default TopHeaderPart
