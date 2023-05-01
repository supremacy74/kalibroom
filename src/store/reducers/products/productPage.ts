import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {colorI, materialI, productI} from '@/interfaces/product'

interface productPageI {
	currentProduct: productI | null
	currentMaterial: materialI | null
	currentMaterialColor: colorI | null
}

const initialState: productPageI = {
	currentProduct: null,
	currentMaterial: null,
	currentMaterialColor: null
}

const productPageSlice = createSlice({
	name: 'productPage',
	initialState,
	reducers: {
		setCurrentProduct(
			state: productPageI,
			action: PayloadAction<productI | null>
		) {
			state.currentProduct = action.payload
		},
		setCurrentMaterial(
			state: productPageI,
			action: PayloadAction<materialI | null>
		) {
			state.currentMaterial = action.payload
		},
		setCurrentMaterialColor(
			state: productPageI,
			action: PayloadAction<colorI | null>
		) {
			state.currentMaterialColor = action.payload
		}
	},
})

export const { setCurrentProduct, setCurrentMaterial, setCurrentMaterialColor } = productPageSlice.actions
export default productPageSlice.reducer
