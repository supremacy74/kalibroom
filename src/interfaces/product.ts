export interface imageI {
	color: string
	imageURL: string
}

export interface propertyI {
	title: string
	slug: string
	image?: string
}

export interface productI {
	id: string
	slug: string
	title: string
	price: string
	categoryId: string
	images: imageI[]
	properties: propertyI[]
}

export interface extendedProductI extends productI {
	description: string
	colors: string[]
	size: string[]
	priceWithoutDiscount: string
	installmentPlan: string
	specifications: string
	presenceInShowrooms: string
}