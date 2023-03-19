import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { setHeaderBottomPartVisible } from '@/store/reducers/headerBottomPart'
import {
	setDarkTheme,
	setLightTheme,
} from '@/helpers/changeTheme'

export const useHeaderVisible: Function = (
	headerBottomIsVisible: boolean,
	handleHeaderBottomVisible: Dispatch<
		SetStateAction<boolean>
	>
) => {
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

	const scrollEventListenerOnHeader = () => {
		if (scrollY > 50) {
			handleHeaderBottomVisible(false)
		} else if (innerWidth >= 1300) {
			handleHeaderBottomVisible(true)
		}
	}

	const resizeEventListenerOnHeader = () => {
		if (innerWidth <= 1300) {
			handleHeaderBottomVisible(false)
		} else {
			handleHeaderBottomVisible(true)
		}
	}

	useEffect(() => {
		if (innerWidth <= 1300) {
			handleHeaderBottomVisible(false)
		}

		document.addEventListener(
			'scroll',
			scrollEventListenerOnHeader
		)
		window.addEventListener(
			'resize',
			resizeEventListenerOnHeader
		)

		return () => {
			document.removeEventListener(
				'scroll',
				scrollEventListenerOnHeader
			)
			window.removeEventListener(
				'resize',
				resizeEventListenerOnHeader
			)
		}
	}, [])
}
