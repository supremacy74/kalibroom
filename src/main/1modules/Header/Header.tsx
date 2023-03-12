import { FC, memo, useEffect, useState } from 'react'
import style from './styles/Header.module.scss'
import BottomHeaderPart from '@/main/2components/BottomHeaderPart/BottomHeaderPart'
import TopHeaderPart from '@/main/2components/TopHeaderPart/TopHeaderPart'
import {
	setLightTheme,
	setDarkTheme,
} from '@/helpers/changeTheme'
import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { setHeaderBottomPartVisible } from '@/store/reducers/headerBottomPart'

const Header: FC = () => {
	const [headerBottomIsVisible, handleHeaderBottomVisible] =
		useState(true)
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(
			setHeaderBottomPartVisible(headerBottomIsVisible)
		)
	}, [headerBottomIsVisible])

	useEffect(() => {
		if (!theme) {
			setLightTheme()
		} else {
			setDarkTheme()
		}
	}, [theme])

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (scrollY > 50) {
				handleHeaderBottomVisible(false)
			} else {
				handleHeaderBottomVisible(true)
			}
		})
	}, [])

	return (
		<div className={style.headerWrapper}>
			<header className={style.header}>
				<TopHeaderPart />
				<BottomHeaderPart />
			</header>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
