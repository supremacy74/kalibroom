import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type pathT = {
	url: string
	label: string
}

const initialState: pathT[] = []

const pathsSlice = createSlice({
	name: 'paths',
	initialState,
	reducers: {
		setPaths(state: pathT[], action: PayloadAction<pathT[]>) {
			state.splice(0, state.length, ...action.payload)
		},
	},
})

export const { setPaths } = pathsSlice.actions
export default pathsSlice.reducer
