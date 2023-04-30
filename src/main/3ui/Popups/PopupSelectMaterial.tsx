import { CSSProperties, FC, memo, useState } from 'react'
import style from './Popup.module.scss'
import Image from 'next/image'
import { crossDarkIcon, crossIcon } from '@/helpers/importIcons'
import Button from '@/main/3ui/Buttons/Button/Button'
import PopupWrapper from '@/main/3ui/Popups/PopupWrapper'
import { AnimatePresence } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Color from '@/main/3ui/Buttons/Color/Color'
import Material from '@/main/3ui/Buttons/Material/Material'
import { colorPopupHandleVisible } from '@/store/reducers/popups'
import { setBodyOverflow } from '@/store/reducers/global/bodyOverflow'
import { mainImage } from '@/helpers/importImages'
import { setCurrentMaterial } from '@/store/reducers/products/productPage'

const PopupSelectMaterial: FC = () => {
	const isVisible = useAppSelector(state => state.popups.colorPopup.isVisible)

	return <AnimatePresence>{isVisible && <Main />}</AnimatePresence>
}

const Main: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)
	const currentProduct = useAppSelector(
		state => state.productPage.currentProduct
	)

	const dispatch = useAppDispatch()

	const [buttonDisabled, handleButtonDisabled] = useState(false)
	const [currentIndexColor, setCurrentIndexColor] = useState(0)
	const [currentIndexMaterial, setCurrentIndexMaterial] = useState(0)

	const wrapperStyles: CSSProperties = {
		alignItems: 'center',
		justifyContent: 'center',
	}

	return (
		<PopupWrapper
			style={wrapperStyles}
			onClick={() => dispatch(colorPopupHandleVisible(false))}>
			<div className={style.popupSelectMaterial}>
				<button
					onClick={() => {
						dispatch(setBodyOverflow(false))
						dispatch(colorPopupHandleVisible(false))
					}}
					className={style.cross}>
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
							{currentProduct?.materials &&
								currentProduct.materials[currentIndexMaterial].colors.map(
									(color, index) => {
										return (
											<Color
												key={index}
												hex={color.color}
												index={index}
												currentIndex={currentIndexColor}
												setCurrentIndex={setCurrentIndexColor}
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
								{currentProduct?.materials &&
									currentProduct.materials.map((material, index) => {
										return (
											<Material
												key={index}
												image={
													material.image === 'image'
														? mainImage
														: material.image
												}
												index={index}
												currentIndex={currentIndexMaterial}
												setCurrentIndex={setCurrentIndexMaterial}
											/>
										)
									})}
							</div>
						</div>
					</div>
				</main>
				<div className={style.buttons}>
					<Button
						onClick={() => {
							if (
								currentProduct?.materials &&
								currentProduct.materials[currentIndexMaterial]
								// &&
								// currentProduct.materials[currentIndexMaterial].colors &&
								// currentProduct.materials[currentIndexMaterial].colors[
								// 	currentIndexColor
								// ]
							) {
								dispatch(colorPopupHandleVisible(false))
								dispatch(
									setCurrentMaterial(
										currentProduct.materials[currentIndexMaterial]
									)
								)
								// dispatch(
								// 	setCurrentMaterialColor(
								// 		currentProduct.materials[currentIndexMaterial].colors[
								// 			currentIndexColor
								// 		]
								// 	)
								// )
							}
						}}
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
