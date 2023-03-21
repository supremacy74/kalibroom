const changeColor = (key: string, value: string) => {
	document.body.style.setProperty(key, value)
}

export const setLightTheme = () => {
	changeColor('--colorFont', '#1c1c1c')
	changeColor('--colorBackground', '#fff')
	changeColor('--colorStroke', '#ebebeb')

	changeColor('--colorGray', '#3e3d3d')
	changeColor('--colorSmokyWhite', '#f4f4f4')
	changeColor('--colorSignalBlack', '#252525')
	changeColor('--colorMotherOfPearlDarkGray', '#828282')
}

export const setDarkTheme = () => {
	changeColor('--colorFont', '#fff')
	changeColor('--colorBackground', '#252525')
	changeColor('--colorStroke', '#3a3a3a')

	changeColor('--colorGray', '#989898')
	changeColor('--colorSmokyWhite', '#1f1f1f')
	changeColor('--colorSignalBlack', '#fff')
	changeColor('--colorMotherOfPearlDarkGray', '#3E3D3D')
}
