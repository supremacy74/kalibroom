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
import {setDarkTheme, setLightTheme} from "@/helpers/changeTheme";

interface HeaderProps {
	isDarkTheme: boolean
	handleTheme: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = props => {
	const [catalogIsOpen, handleCatalog] =
		useState<boolean>(false)
	const [bottomPartVisible, handleBottomPartVisible] =
		useState<boolean>(true)

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
