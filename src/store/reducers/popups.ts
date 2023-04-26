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
		sizePopupHandleVisible(state: popupsI, action) {
			state.sizePopup.isVisible = action.payload
		},
	},
})

export const { colorPopupHandleVisible, sizePopupHandleVisible } =
	popups.actions
export default popups.reducer
