import { useAppDispatch } from '@/store/hooks'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { setHeaderBottomPartVisible } from '@/store/reducers/headerBottomPart'
export const useHeaderVisible: Function = () => {
	const [headerBottomIsVisible, handleHeaderBottomVisible] = useState(true)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setHeaderBottomPartVisible(headerBottomIsVisible))
	}, [headerBottomIsVisible])

	const wheelEventListener = () => {
		if (scrollY > 300) {
			handleHeaderBottomVisible(false)
		} else if (innerWidth >= 1300) {
			handleHeaderBottomVisible(true)
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

		document.addEventListener('wheel', wheelEventListener)
		window.addEventListener('resize', resizeEventListener)

		return () => {
			document.removeEventListener('wheel', wheelEventListener)
			window.removeEventListener('resize', resizeEventListener)
		}
	}, [])
}
