import { useAppDispatch } from '@/store/hooks'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { setHeaderBottomPartVisible } from '@/store/reducers/headerBottomPart'
export const useHeaderVisible: Function = () => {
	const [headerBottomIsVisible, handleHeaderBottomVisible] = useState(true)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setHeaderBottomPartVisible(headerBottomIsVisible))
	}, [headerBottomIsVisible])

	let lastScrollPosition = 0

	// const scrollEventListener = () => {
	// 	if (lastScrollPosition > scrollY && scrollY < 300) {
	// 		handleHeaderBottomVisible(true)
	// 	} else if (lastScrollPosition < scrollY && scrollY > 300) {
	// 		handleHeaderBottomVisible(false)
	// 	}
	//
	// 	lastScrollPosition = scrollY
	//
	// 	setTimeout(() => {
	// 		lastScrollPosition = scrollY
	// 	}, 100)
	//
	// 	console.log(lastScrollPosition, scrollY)
	// }

	const wheelEventListener = (e: WheelEvent) => {
		if (scrollY > 300 && e.deltaY > 0) {
			handleHeaderBottomVisible(false)
		} else if (scrollY < 300 && e.deltaY < 0) {
			handleHeaderBottomVisible(true)
		}

		if (innerWidth <= 1300) {
			handleHeaderBottomVisible(false)
		}
	}

	const resizeEventListener = () => {
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

		document.addEventListener('wheel', (e: WheelEvent) => wheelEventListener(e))
		// document.addEventListener('scroll', scrollEventListener)
		window.addEventListener('resize', resizeEventListener)

		return () => {
			document.removeEventListener('wheel', (e: WheelEvent) => wheelEventListener(e))
			// document.removeEventListener('scroll', scrollEventListener)
			window.removeEventListener('resize', resizeEventListener)
		}
	}, [])
}
