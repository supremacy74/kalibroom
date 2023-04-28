import { createSlice } from '@reduxjs/toolkit'
import { categoryI } from '@/interfaces/category'

interface categoriesReducerI {
	categories: categoryI[],
	firstFiveCategories: categoryI[],
}

const initialState: categoriesReducerI = {
	categories: [],
	firstFiveCategories: [],
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories(state: categoriesReducerI, action) {
			state.categories = action.payload
		},
		setFirstFiveCategories(state: categoriesReducerI, action) {
			state.firstFiveCategories = action.payload
		}
	},
})

export const { setCategories, setFirstFiveCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
