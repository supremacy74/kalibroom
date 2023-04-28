import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { productI } from '@/interfaces/product'

interface productPageI {
	currentProduct: productI | null
}

const initialState: productPageI = {
	currentProduct: null,
}

const productPageSlice = createSlice({
	name: 'productPage',
  initialState,
  reducers: {
    setCurrentProduct(state: productPageI, action: PayloadAction<productI>) {
      state.currentProduct = action.payload
    }
  }
})

export const { setCurrentProduct } = productPageSlice.actions
export default productPageSlice.reducer
