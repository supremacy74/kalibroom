import { FC, memo, useState } from 'react'
import style from './styles/SearchMenu.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { getCommonAnimation, getSpringTransition } from '@/helpers/animations'
import { menuV } from '@/helpers/variants'
import Image from 'next/image'
import {
	crossDarkIcon,
	crossIcon,
	searchDarkIcon,
	searchIcon,
	searchOpacityDarkIcon,
	searchOpacityIcon,
	timeDarkIcon,
	timeIcon,
} from '@/helpers/importIcons'
import Link from 'next/link'
import { handleSearchMenu } from '@/store/reducers/header/search'

interface searchTemplateI {
	label: string
	url: string
}

const SearchMenu: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)
	const searchMenuIsVisible = useAppSelector(
		state => state.search.menuIsVisible
	)
	const [search, setSearch] = useState('')

	const dispatch = useAppDispatch()

	const [history, setHistory] = useState<searchTemplateI[]>([
		{
			label: 'Диваны',
			url: '#',
		},
		{
			label: 'Женщины',
			url: '#',
		},
		{
			label: 'Диван купить онлайн без регистрации и смс',
			url: '#',
		},
	])

	const mostlySearch: searchTemplateI[] = [
		{
			label: 'Диваны',
			url: '#',
		},
		{
			label: 'Кровати',
			url: '#',
		},
		{
			label: 'Столы',
			url: '#',
		},
	]

	return (
		<>
			<AnimatePresence>
				{searchMenuIsVisible && (
					<motion.div
						onKeyDown={e => {
							if (e.key === 'Escape') {
								dispatch(handleSearchMenu(false))
							}
						}}
						variants={menuV}
						{...getCommonAnimation()}
						transition={getSpringTransition(10, 30)}
						className={style.menu}>
						<label className={style.label}>
							{!theme ? (
								<Image src={searchIcon} alt={'searchIcon'} />
							) : (
								<Image src={searchDarkIcon} alt={'searchDarkIcon'} />
							)}
							<input
								className={style.input}
								placeholder={'Поиск по каталогу'}
								type='text'
								autoFocus={true}
								value={search}
								onChange={e => setSearch(e.target.value)}
							/>
							{search && (
								<button onClick={() => setSearch('')} className={style.cross}>
									{!theme ? (
										<Image src={crossIcon} alt={'crossIcon'} />
									) : (
										<Image src={crossDarkIcon} alt={'crossDarkIcon'} />
									)}
								</button>
							)}
						</label>
						<main className={style.main}>
							<div className={style.part}>
								<h4 className={style.title}>История</h4>
								<div className={style.content}>
									{history.map((block, index) => {
										return (
											<div key={index} className={style.historyBlock}>
												<Link className={style.link} href={block.url}>
													{!theme ? (
														<Image src={timeIcon} alt={'timeIcon'} />
													) : (
														<Image src={timeDarkIcon} alt={'timeDarkIcon'} />
													)}
													{block.label}
												</Link>
												<button
													onClick={() => {
														const tempArray = history
														tempArray.splice(index, 1)
														console.log(tempArray)
														setHistory([...tempArray])
													}}
													className={style.cross}>
													{!theme ? (
														<Image src={crossIcon} alt={'crossIcon'} />
													) : (
														<Image src={crossDarkIcon} alt={'crossDarkIcon'} />
													)}
												</button>
											</div>
										)
									})}
								</div>
							</div>
							<div className={style.part}>
								<h4 className={style.title}>Чаще всего ищут</h4>
								<div className={style.content}>
									{mostlySearch.map((block, index) => {
										return (
											<Link key={index} className={style.link} href={block.url}>
												{!theme ? (
													<Image
														src={searchOpacityIcon}
														alt={'searchOpacityIcon'}
													/>
												) : (
													<Image
														src={searchOpacityDarkIcon}
														alt={'searchOpacityDarkIcon'}
													/>
												)}
												{block.label}
											</Link>
										)
									})}
								</div>
							</div>
							{/*<div className={style.part}>*/}
							{/*	<h4 className={style.title}>Результаты поиска</h4>*/}
							{/*	<div className={style.content}></div>*/}
							{/*</div>*/}
						</main>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

SearchMenu.displayName = 'SearchMenu'
export default SearchMenu
