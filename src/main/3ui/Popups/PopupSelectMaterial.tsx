import { CSSProperties, FC, memo, useState } from 'react'
import style from './Popup.module.scss'
import Image from 'next/image'
import { crossDarkIcon, crossIcon } from '@/helpers/importIcons'
import Button from '@/main/3ui/Buttons/Button/Button'
import PopupWrapper from '@/main/3ui/Popups/PopupWrapper'
import { AnimatePresence } from 'framer-motion'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import Color from '@/main/3ui/Buttons/Color/Color'
import Material from '@/main/3ui/Buttons/Material/Material'
import {colorPopupHandleVisible} from "@/store/reducers/popups";

const PopupSelectMaterial: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)
	const isVisible = useAppSelector(state => state.popups.colorPopup.isVisible)

	const dispatch = useAppDispatch()

	const [buttonDisabled, handleButtonDisabled] = useState(false)
	const [currentColor, setCurrentColor] = useState(0)
	const [currentMaterial, setCurrentMaterial] = useState(0)

	const wrapperStyles: CSSProperties = {
		alignItems: 'center',
		justifyContent: 'center',
	}

	const colors = ['#c04', '#fa0', '#30f', '#0af', '#6c4']
	const materials = ['/', '/', '/', '/', '/', '/', '/']

	return (
		<AnimatePresence>
			{isVisible && (
				<PopupWrapper style={wrapperStyles}>
					<div className={style.popupSelectMaterial}>
						<button onClick={() => dispatch(colorPopupHandleVisible(false))} className={style.cross}>
							{!theme ? (
								<Image src={crossIcon} alt={'crossIcon'} />
							) : (
								<Image src={crossDarkIcon} alt={'crossDarkIcon'} />
							)}
						</button>
						<main className={style.main}>
							<div className={style.block}>
								<h4 className={style.title}>Цвет</h4>
								<div className={style.colorsMap}>
									{[...colors, ...colors, ...colors, ...colors].map(
										(value, index) => {
											return (
												<Color
													hex={value}
													index={index}
													currentIndex={currentColor}
													setCurrentIndex={setCurrentColor}
												/>
											)
										}
									)}
								</div>
							</div>
							<div className={style.block}>
								<h4 className={style.title}>Материал</h4>
								<div className={style.materialsMain}>
									<h5 className={style.materialTitle}>Алькантара</h5>
									<div className={style.materialMap}>
										{materials.map((value, index) => {
											return (
												<Material
													image={value}
													index={index}
													currentIndex={currentMaterial}
													setCurrentIndex={setCurrentMaterial}
												/>
											)
										})}
									</div>
								</div>
							</div>
						</main>
						<div className={style.buttons}>
							<Button
								type={'flat'}
								disabled={buttonDisabled}
								className={style.button}>
								Показать
							</Button>
							<Button
								onClick={() => dispatch(colorPopupHandleVisible(false))}
								type={'outline'}
								disabled={buttonDisabled}
								className={style.button}>
								Сбросить
							</Button>
						</div>
					</div>
				</PopupWrapper>
			)}
		</AnimatePresence>
	)
}

export default memo(PopupSelectMaterial)
