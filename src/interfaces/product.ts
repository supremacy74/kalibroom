export interface productI {
	// main data
	id: string
	slug: string
	article: string
	name: string

	// price and discount
	price: number
	discount?: number

	// category
	category_id: number

	// common
	model_3d?: string
	instruction?: string
	scores?: string
	quantity?: number
	description?: string
	sizes?: string[]
	showrooms?: showroomI[]

	// customization
	images: imageI[]
	materials: materialI[]

	// content
	videos?: string[]
	images_in_interiors?: string[]

	// other
	properties?: propertyI[]
	reviews?: reviewI[]
}

export interface imageI {
	color: string
	material: string
	imageURL: string
}

export interface propertyI {
	name: string
	value: string
}

export interface showroomI {
	location: string
	quantity: number
}

export interface materialI {
	colors: string[]
	title: string
	type: string
	image: string
}

export interface reviewI {
	user_name: string
	avatar: string
	time_use: number
	date: string
	rate: number
	body: string
}
