import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'

export interface ThemeState {
	isDarkTheme: boolean
}

const initialState: ThemeState = {
	isDarkTheme: false,
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleDarkTheme(state: ThemeState) {
			state.isDarkTheme = !state.isDarkTheme
		},
		setDarkTheme(state: ThemeState, action: PayloadAction<boolean>) {
			state.isDarkTheme = action.payload
		},
	},
})

export const { toggleDarkTheme, setDarkTheme } =
	themeSlice.actions
export default themeSlice.reducer
