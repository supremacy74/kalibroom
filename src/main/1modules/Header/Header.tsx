import {
	Dispatch,
	FC,
	memo,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import style from './styles/Header.module.scss'
import BottomHeaderPart from '@/main/2components/BottomHeaderPart/BottomHeaderPart'
import TopHeaderPart from '@/main/2components/TopHeaderPart/TopHeaderPart'

interface HeaderProps {
	isDarkTheme: boolean
	handleTheme: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = props => {
	const [catalogIsOpen, handleCatalog] =
		useState<boolean>(false)
	const [bottomPartVisible, handleBottomPartVisible] =
		useState<boolean>(true)

	const changeVariableColor = (
		key: string,
		value: string
	) => {
		document.body.style.setProperty(key, value)
	}

	const setLightTheme = () => {
		changeVariableColor('--colorFont', '#1c1c1c')
		changeVariableColor('--colorBackground', '#fff')
		changeVariableColor('--colorStroke', '#ebebeb')
	}

	const setDarkTheme = () => {
		changeVariableColor('--colorFont', '#fff')
		changeVariableColor('--colorBackground', '#252525')
		changeVariableColor('--colorStroke', '#3a3a3a')
	}

	useEffect(() => {
		if (!props.isDarkTheme) {
			setLightTheme()
		} else {
			setDarkTheme()
		}
	}, [props.isDarkTheme])

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (scrollY > 50) {
				handleBottomPartVisible(false)
			} else {
				handleBottomPartVisible(true)
			}
		})
	}, [])

	return (
		<div className={style.headerWrapper}>
			<header className={style.header}>
				<TopHeaderPart
					isDarkTheme={props.isDarkTheme}
					bottomPartVisible={bottomPartVisible}
					catalogIsOpen={catalogIsOpen}
					handleCatalog={handleCatalog}
				/>
				<BottomHeaderPart
					bottomPartVisible={bottomPartVisible}
					catalogIsOpen={catalogIsOpen}
					handleCatalog={handleCatalog}
					isDarkTheme={props.isDarkTheme}
					handleTheme={props.handleTheme}
				/>
			</header>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
