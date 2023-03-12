import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'

interface headerBottomPartState {
	isVisible: boolean
}

const initialState: headerBottomPartState = {
	isVisible: true,
}

const headerBottomPartSlice = createSlice({
	name: 'headerBottomPart',
	initialState,
	reducers: {
		toggleHeaderBottomPartVisible(
			state: headerBottomPartState
		) {
			state.isVisible = !state.isVisible
		},
		setHeaderBottomPartVisible(
			state: headerBottomPartState,
			action: PayloadAction<boolean>
		) {
			state.isVisible = action.payload
		},
	},
})

export const { toggleHeaderBottomPartVisible, setHeaderBottomPartVisible } =
	headerBottomPartSlice.actions
export default headerBottomPartSlice.reducer
