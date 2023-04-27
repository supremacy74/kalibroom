import { createSlice } from '@reduxjs/toolkit'
import { categoryI } from '@/interfaces/category'

interface categoriesReducerI {
	categories: categoryI[]
}

const initialState: categoriesReducerI = {
	categories: [],
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories(state: categoriesReducerI, action) {
			state.categories = action.payload
		},
	},
})

export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
