import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'

interface catalogMenuState {
	isOpen: boolean
	productsIsOpen: boolean
	ideasIsOpen: boolean
}

const initialState: catalogMenuState = {
	isOpen: false,
	productsIsOpen: true,
	ideasIsOpen: false,
}

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		toggleCatalogMenu(state: catalogMenuState) {
			state.isOpen = !state.isOpen
		},
		toggleCatalogCategoryToProducts(
			state: catalogMenuState
		) {
			state.ideasIsOpen = false
			state.productsIsOpen = true
		},
		toggleCatalogCategoryToIdeas(state: catalogMenuState) {
			state.ideasIsOpen = true
			state.productsIsOpen = false
		},
	},
})

export const {
	toggleCatalogMenu,
	toggleCatalogCategoryToProducts,
	toggleCatalogCategoryToIdeas,
} = catalogSlice.actions
export default catalogSlice.reducer
