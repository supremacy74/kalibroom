import {
	Dispatch,
	FC,
	memo,
	SetStateAction,
	useEffect,
	useState,
} from 'react'
import style from './styles/Header.module.scss'
import Logo from '@/main/3ui/Logo/Logo'
import Image from 'next/image'
import {
	heartIcon,
	locationIcon,
	moonIcon,
	phoneIcon,
	searchIcon,
	sunIcon,
	vectorDownIcon,
} from '@/helpers/importIcons'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getSpringTransition } from '@/helpers/animations'
import {
	hamburgerStick1V,
	hamburgerStick2V,
	hamburgerStick3V,
	vectorDownV,
} from './styles/variants'
import ThemeSlider from "@/main/3ui/ThemeSlider/ThemeSlider";

interface HeaderProps {
	isDarkTheme: boolean
	handleTheme: Dispatch<SetStateAction<boolean>>
}

const Header: FC<HeaderProps> = props => {
	const [catalogIsOpen, handleCatalog] =
		useState<boolean>(false)

	const categoryButtons = [
		'диваны',
		'кровати',
		'столы',
		'стулья',
		'кресла',
	]

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

	return (
		<div className={style.headerWrapper}>
			<header className={style.header}>
				<div className={style.part}>
					<Logo
						className={style.logo}
						isDarkTheme={props.isDarkTheme}
					/>
					<ContactsPanel />
					<DeliveryPanel />
					<TopRightPanel />
				</div>
				<div className={style.part}>
					<CatalogButton
						catalogIsOpen={catalogIsOpen}
						handleCatalog={handleCatalog}
					/>
					{categoryButtons.map((value, index) => {
						return (
							<CategoryButton title={value} index={index} />
						)
					})}
					<InStockButton />
					<ThemeSlider
						handleTheme={props.handleTheme}
						isDarkTheme={props.isDarkTheme}
					/>
				</div>
			</header>
		</div>
	)
}

const InStockButton: FC = () => {
	return (
		<button className={style.inStockButton}>
			в наличии
		</button>
	)
}

interface CategoryButtonI {
	title: string
	index: number
}

const CategoryButton: FC<CategoryButtonI> = props => {
	const [isOpen, handleOpen] = useState<boolean>(false)

	return (
		<button
			onClick={() => handleOpen(prev => !prev)}
			style={{
				gridColumn: `${5 + props.index * 3}/${
					8 + props.index * 3
				}`,
				gridRow: '1/2',
			}}
			className={style.categoryButton}>
			{props.title}
			<motion.div
				variants={vectorDownV}
				animate={isOpen ? 'on' : 'off'}
				transition={getSpringTransition(30, 185)}
				className={style.iconWrapper}>
				<Image
					className={style.icon}
					src={vectorDownIcon}
					alt={'vectorDownIcon'}
				/>
			</motion.div>
		</button>
	)
}

interface CatalogButtonI {
	catalogIsOpen: boolean
	handleCatalog: Dispatch<SetStateAction<boolean>>
}

const CatalogButton: FC<CatalogButtonI> = props => {
	return (
		<button
			onClick={() => props.handleCatalog(prev => !prev)}
			className={style.catalogButton}>
			Каталог
			<div className={style.hamburgerIcon}>
				<motion.div
					variants={hamburgerStick1V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick2V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
				<motion.div
					variants={hamburgerStick3V}
					animate={props.catalogIsOpen ? 'on' : 'off'}
					transition={getSpringTransition(30, 185)}
					className={style.hamburgerStick}
				/>
			</div>
		</button>
	)
}

const ContactsPanel: FC = () => {
	return (
		<div className={style.contacts}>
			<div className={style.contactsLeft}>
				<div className={style.phone}>
					<span className={style.phoneText}>
						+7 999 999-99-99
					</span>
					<Image src={phoneIcon} alt={'phoneIcon'} />
				</div>
				<div className={style.time}>пн-пт с 9 до 21</div>
			</div>
			<div className={style.location}>
				<span className={style.locationText}>Москва</span>
				<Image src={locationIcon} alt={'location'} />
			</div>
		</div>
	)
}

const DeliveryPanel: FC = () => {
	return (
		<div className={style.delivery}>
			<Link className={style.link} href={'#'}>
				Доставка
			</Link>
			<Link className={style.link} href={'#'}>
				Шоурумы
			</Link>
		</div>
	)
}

const TopRightPanel: FC = () => {
	return (
		<div className={style.topRightPanel}>
			<button className={style.buttonWithIcon}>
				Поиск
				<Image
					className={style.icon}
					src={searchIcon}
					alt={'searchIcon'}
				/>
			</button>
			<button className={style.buttonWithIcon}>
				Избранное
				<Image
					className={style.icon}
					src={heartIcon}
					alt={'searchIcon'}
				/>
			</button>
			<button className={style.buttonWithIcon}>
				Корзина
				<div className={style.cartCounter}>0</div>
			</button>
		</div>
	)
}

Header.displayName = 'Header'
export default memo(Header)
