import { propertyI } from '@/interfaces/product'

export interface categoryI {
	id: string
	title: string
	slug: string
	properties: propertyI[]
}
