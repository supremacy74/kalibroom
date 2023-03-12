import {
	createSlice,
} from '@reduxjs/toolkit'

interface catalogMenuState {
	isOpen: boolean
}

const initialState: catalogMenuState = {
	isOpen: false,
}

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		toggleCatalogMenu(state: catalogMenuState) {
			state.isOpen = !state.isOpen
		}
	},
})

export const { toggleCatalogMenu } = catalogSlice.actions
export default catalogSlice.reducer
