import {
	useAppDispatch,
	useAppSelector,
} from '@/store/hooks'
import { useEffect } from 'react'
import {
	setDarkTheme,
	setLightTheme,
} from '@/helpers/changeTheme'
import { setterDarkTheme } from '@/store/reducers/global/theme'

export const useTheme = () => {
	const dispatch = useAppDispatch()
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	useEffect(() => {
		const themeIsDark = localStorage.getItem('themeIsDark')
		if (themeIsDark) {
			const themeIsDarkPrepared = JSON.parse(themeIsDark)
			dispatch(setterDarkTheme(themeIsDarkPrepared))
		} else {
			dispatch(setterDarkTheme(false))
		}
	}, [])

	useEffect(() => {
		if (!theme) {
			setLightTheme()
		} else {
			setDarkTheme()
		}
	}, [theme])
}
