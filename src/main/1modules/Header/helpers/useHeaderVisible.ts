import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'
import { setHeaderBottomPartVisible } from '@/store/reducers/header/headerBottomPart'

export const useHeaderVisible: Function = () => {
	const dispatch = useAppDispatch()

	// let lastPosition = 0

	const checkWidthSizeAndScroll = () => {
		if (innerWidth < 1300) {
			dispatch(setHeaderBottomPartVisible(false))
			return
		}

		if (scrollY < 320) {
			setTimeout(() => {
				dispatch(setHeaderBottomPartVisible(true))
			}, 1000)
		} else {
			setTimeout(() => {
				dispatch(setHeaderBottomPartVisible(false))
			}, 1000)
		}

		// if (scrollY > 400) {
		// 	dispatch(setHeaderBottomPartVisible(false))
		// } else if (scrollY <= 400) {
		// 	dispatch(setHeaderBottomPartVisible(true))
		// }
	}

	useEffect(() => {
		checkWidthSizeAndScroll()
		document.addEventListener('scroll', checkWidthSizeAndScroll)
		window.addEventListener('resize', checkWidthSizeAndScroll)
	}, [])
}
