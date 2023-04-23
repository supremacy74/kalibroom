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
	const [currentRadio, setCurrentRadio] = useState(1)

	const isVisible = useAppSelector(state => state.popups.sizePopup.isVisible)
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	const dispatch = useAppDispatch()

	const wrapperStyles: CSSProperties = {
		justifyContent: 'flex-end',
	}

	const sizes = ['120 см', '140 см', '150 см', '160 см', '170 см', '180 см', '190 см']

	const labelStyle: CSSProperties = {
		padding: '0.875rem 2.5rem',
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<PopupWrapper style={wrapperStyles} onClick={() => dispatch(sizePopupHandleVisible(false))}>
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
							{[...sizes, ...sizes, ...sizes, ...sizes].map((value, index) => {
								return (
									<Radio
										key={index}
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
