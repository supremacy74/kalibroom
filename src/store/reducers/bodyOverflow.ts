import { createSlice } from '@reduxjs/toolkit'

interface bodyOverflowI {
	isOverflow: boolean
}

const initialState: bodyOverflowI = {
	isOverflow: false
}

const bodyOverflow = createSlice({
	name: 'bodyOverflow',
	initialState,
	reducers: {
		setBodyOverflow(state: bodyOverflowI, action) {
			state.isOverflow = action.payload
		},
		toggleBodyOverflow(state: bodyOverflowI) {
			state.isOverflow = !state
		},
	},
})

export const { setBodyOverflow, toggleBodyOverflow } = bodyOverflow.actions
export default bodyOverflow.reducer
