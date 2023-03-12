import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { productI } from '@/store/interfaces/product'
import { arrayOfProducts1 } from '@/data/arrayOfProducts1'

const initialState: productI[] = arrayOfProducts1

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
