import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productI } from '@/interfaces/product'

const initialState: productI[] = []

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state: productI[], action: PayloadAction<productI[]>) {
			state.splice(0, state.length, ...action.payload)
		},
		addProducts(state: productI[], action: PayloadAction<productI[]>) {
			state.push(...action.payload)
		}
	},
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
