export interface productI {
	id: string
	title: string
	price: string
	category: string
	images: string[]
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
