import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface searchI {
	menuIsVisible: boolean
}

const initialState: searchI = {
	menuIsVisible: false,
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		toggleSearchMenu(state: searchI) {
			state.menuIsVisible = !state.menuIsVisible
		},
		handleSearchMenu(state: searchI, action: PayloadAction<boolean>) {
			state.menuIsVisible = action.payload
		},
	},
})

export const { toggleSearchMenu, handleSearchMenu } = searchSlice.actions
export default searchSlice.reducer
