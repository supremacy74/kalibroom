import { AnimatePresence } from 'framer-motion'
import { CSSProperties, FC, memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import style from './Popup.module.scss'
import PopupWrapper from '@/main/3ui/Popups/PopupWrapper'
import Image from 'next/image'
import { crossDarkIcon, crossIcon } from '@/helpers/importIcons'
import { sizePopupHandleVisible } from '@/store/reducers/popups'
import Button from '@/main/3ui/Buttons/Button/Button'
import Radio from '@/main/3ui/Buttons/Radio/Radio'

const PopupSizes: FC = () => {
	const [currentRadio, setCurrentRadio] = useState(0)

	const isVisible = useAppSelector(state => state.popups.sizePopup.isVisible)
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	const dispatch = useAppDispatch()

	const wrapperStyles: CSSProperties = {
		justifyContent: 'flex-end',
	}

	const sizes = ['123', '123', '123', '123', '123', '123', '123']

	const labelStyle: CSSProperties = {
		padding: '0.875rem 2.5rem'
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<PopupWrapper style={wrapperStyles}>
					<div className={style.sizePopup}>
						<div className={style.top}>
							<h4 className={style.title}>Размер</h4>
							<button
								onClick={() => dispatch(sizePopupHandleVisible(false))}
								className={style.cross}>
								{!theme ? (
									<Image src={crossIcon} alt={'crossIcon'} />
								) : (
									<Image src={crossDarkIcon} alt={'crossDarkIcon'} />
								)}
							</button>
						</div>
						<main className={style.sizeMain}>
							{sizes.map((value, index) => {
								return (
									<Radio
										title={value}
										name={'size'}
										onChange={() => setCurrentRadio(index)}
										value={currentRadio}
										index={index}
										labelStyle={labelStyle}
									/>
								)
							})}
						</main>
						<div className={style.sizeButtons}>
							<Button className={style.button} type={'flat'}>
								Показать
							</Button>
							<Button
								className={style.button}
								type={'outline'}
								onClick={() => dispatch(sizePopupHandleVisible(false))}>
								Сбросить
							</Button>
						</div>
					</div>
				</PopupWrapper>
			)}
		</AnimatePresence>
	)
}

// const

export default memo(PopupSizes)
