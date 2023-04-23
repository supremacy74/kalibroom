import { CSSProperties, FC, memo, useEffect, useState } from "react";
import style from './Popup.module.scss'
import Image from 'next/image'
import { crossDarkIcon, crossIcon } from '@/helpers/importIcons'
import Button from '@/main/3ui/Buttons/Button/Button'
import PopupWrapper from '@/main/3ui/Popups/PopupWrapper'
import { AnimatePresence } from 'framer-motion'
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import Color from '@/main/3ui/Buttons/Color/Color'
import Material from '@/main/3ui/Buttons/Material/Material'
import { colorPopupHandleVisible } from "@/store/reducers/popups";
import { setBodyOverflow } from "@/store/reducers/bodyOverflow";

const PopupSelectMaterial: FC = () => {
	const isVisible = useAppSelector(state => state.popups.colorPopup.isVisible)

	return (
		<AnimatePresence>
			{isVisible && (
				<Main />
			)}
		</AnimatePresence>
	)
}

const Main: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

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
		<PopupWrapper style={wrapperStyles} onClick={() => dispatch(colorPopupHandleVisible(false))}>
			<div className={style.popupSelectMaterial}>
				<button onClick={() => {
					dispatch(setBodyOverflow(false))
					dispatch(colorPopupHandleVisible(false))
				}} className={style.cross}>
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
											key={index}
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
											key={index}
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
	)
}

export default memo(PopupSelectMaterial)
