import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'

interface catalogMenuState {
	isOpen: boolean
	productsIsOpen: boolean
	ideasIsOpen: boolean
	indexOfCurrentCategory: number
	indexOfCurrentCategoryInHeader: number
}

const initialState: catalogMenuState = {
	isOpen: false,
	productsIsOpen: true,
	ideasIsOpen: false,
	indexOfCurrentCategory: 0,
	indexOfCurrentCategoryInHeader: -1
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
		setCatalogCategoryIndex(
			state: catalogMenuState,
			action: PayloadAction<number>
		) {
			state.indexOfCurrentCategory = action.payload
		},
		setCatalogCategoryIndexInHeader(
			state: catalogMenuState,
			action: PayloadAction<number>
		) {
			state.indexOfCurrentCategoryInHeader = action.payload
		}
	},
})

export const {
	toggleCatalogMenu,
	toggleCatalogCategoryToProducts,
	toggleCatalogCategoryToIdeas,
	setCatalogCategoryIndex,
	setCatalogCategoryIndexInHeader,
} = catalogSlice.actions
export default catalogSlice.reducer
