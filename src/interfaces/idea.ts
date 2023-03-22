import { propertyI } from '@/interfaces/product'

export interface ideaI {
	id: string
	title: string
	slug: string
	properties: propertyI[]
}
