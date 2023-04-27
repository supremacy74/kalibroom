import { categoryI } from '@/interfaces/category'
import {productI} from "@/interfaces/product";

export const getAllCategories = async (setter: Function) => {
	const response = await fetch('https://api.kalibroom.ru/api/categories')
	if (response.ok) {
		const data = (await response.json()) as categoryI[]
		setter(data)
	} else {
		console.error('getAllCategories error in apiController!')
	}
}

export const getAllProducts = async (
	setter: Function,
	quantity: number = 12,
	skip: number = 0,
) => {
	const response = await fetch(`https://api.kalibroom.ru/api/products/paged?skip=${skip}&quantity=${quantity}`)
	if (response.ok) {
		const data = (await response.json()) as productI[]
		setter(data)
	} else {
		console.error('getAllProducts error in apiController!')
	}
}