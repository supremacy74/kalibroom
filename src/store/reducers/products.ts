import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { productI } from '@/interfaces/product'
import { arrayOfProducts } from '@/data/arrayOfProducts'

const initialState: productI[] = arrayOfProducts

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(
			state: productI[],
			action: PayloadAction<productI[]>
		) {
			state.splice(0, state.length, ...action.payload)
		},
	},
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
