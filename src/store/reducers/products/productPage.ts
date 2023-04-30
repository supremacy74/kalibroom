import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { colorI, imageI, materialI, productI } from '@/interfaces/product'

interface productPageI {
	currentProduct: productI | null
	currentMaterial: materialI | null
	currentMaterialColor: colorI | null
	currentImages: imageI[] | null
	currentImageIndex: number
}

const initialState: productPageI = {
	currentProduct: null,
	currentMaterial: null,
	currentMaterialColor: null,
	currentImages: null,
	currentImageIndex: 0,
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
		},
		setCurrentImages(
			state: productPageI,
			action: PayloadAction<imageI[] | null>
		) {
			state.currentImages = action.payload ? [...action.payload] : null
		},
		setCurrentImageIndex(state: productPageI, action: PayloadAction<number>) {
			state.currentImageIndex = action.payload
		},
	},
})

export const {
	setCurrentProduct,
	setCurrentMaterial,
	setCurrentMaterialColor,
	setCurrentImages,
	setCurrentImageIndex,
} = productPageSlice.actions
export default productPageSlice.reducer
