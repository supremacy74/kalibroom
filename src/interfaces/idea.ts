import { propertyI } from '@/interfaces/product'

export interface ideaI {
	id: string
	title: string
	slug: string
	description: string
	views: number
	properties: propertyI[]
}
