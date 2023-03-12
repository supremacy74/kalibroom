const changeVariableColor = (
	key: string,
	value: string
) => {
	document.body.style.setProperty(key, value)
}

export const setLightTheme = () => {
	changeVariableColor('--colorFont', '#1c1c1c')
	changeVariableColor('--colorBackground', '#fff')
	changeVariableColor('--colorStroke', '#ebebeb')

	changeVariableColor('--colorGray', '#3e3d3d')
	changeVariableColor('--colorSmokyWhite', '#f4f4f4')
	changeVariableColor('--colorSignalBlack', '#252525')
	changeVariableColor(
		'--colorMotherOfPearlDarkGray',
		'#828282'
	)
}

export const setDarkTheme = () => {
	changeVariableColor('--colorFont', '#fff')
	changeVariableColor('--colorBackground', '#252525')
	changeVariableColor('--colorStroke', '#3a3a3a')

	changeVariableColor('--colorGray', '#989898')
	changeVariableColor('--colorSmokyWhite', '#1f1f1f')
	changeVariableColor('--colorSignalBlack', '#fff')
	changeVariableColor(
		'--colorMotherOfPearlDarkGray',
		'#3E3D3D'
	)
}
