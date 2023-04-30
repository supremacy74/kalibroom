import { createSlice } from '@reduxjs/toolkit'

interface cartI {
	products: any
}

const initialState: cartI = {
	products: []
}

const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartProducts(state: cartI, action) {
			state.products = action.payload
		}
	},
})

export const { setCartProducts } = cart.actions
export default cart.reducer
