import { categoryI } from '@/interfaces/category'
import { productI } from '@/interfaces/product'

export const getAllCategories = async (setter: Function) => {
	try {
		const response = await fetch('https://api.kalibroom.ru/api/categories')
		if (response.ok) {
			const data = (await response.json()) as categoryI[]
			setter(data)
		} else {
			console.error('getAllCategories error in apiController!')
		}
	} catch (e) {
		console.error(e)
	}
}

export const getCategoryByIdOrSlug = async (
	setter: Function,
	idOrSlug: number | string
) => {
	try {
		const response = await fetch(`https://api.kalibroom.ru/api/categories/${idOrSlug}`)
		if (response.ok) {
			const data = (await response.json()) as categoryI
			setter(data)
		} else {
			console.error('getCategoryByIdOrSlug error in apiController!')
		}
	} catch (e) {
		console.error(e)
	}
}

export const getAllProducts = async (
	setter: Function,
	quantity: number = 12,
	skip: number = 0
) => {
	try {
		const response = await fetch(
			`https://api.kalibroom.ru/api/products/paged?skip=${skip}&quantity=${quantity}`
		)
		if (response.ok) {
			const data = (await response.json()) as productI[]
			setter(data)
		} else {
			console.error('getAllProducts error in apiController!')
		}
	} catch (e) {
		console.error(e)
	}
}
