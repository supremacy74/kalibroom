import { createSlice } from '@reduxjs/toolkit'

export interface popupsI {
	colorPopup: {
		isVisible: boolean
	}
	sizePopup: {
		isVisible: boolean
	}
}

const initialState: popupsI = {
	colorPopup: {
		isVisible: false,
	},
	sizePopup: {
		isVisible: false,
	},
}

const popups = createSlice({
	name: 'popups',
	initialState,
	reducers: {
		colorPopupHandleVisible(state: popupsI, action) {
			state.colorPopup.isVisible = action.payload
		},
		colorPopupToggleVisible(state: popupsI) {
			state.colorPopup.isVisible = !state.colorPopup.isVisible
		},
		sizePopupHandleVisible(state: popupsI, action) {
			state.sizePopup.isVisible = action.payload
		},
	},
})

export const { colorPopupHandleVisible, colorPopupToggleVisible, sizePopupHandleVisible } =
	popups.actions
export default popups.reducer
