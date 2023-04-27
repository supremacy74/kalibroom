import { categoryI } from '@/interfaces/category'

export const getAllCategories = async (setter: Function) => {
	const response = await fetch('https://api.kalibroom.ru/api/categories')
	if (response.ok) {
		const data = (await response.json()) as categoryI[]
		setter(data)
	} else {
		console.error('getAllCategories error in apiController!')
	}
}

