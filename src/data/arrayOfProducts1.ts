import { productI } from '@/interfaces/product'

const arrayOfProducts: productI[] = []

for (let i = 0; i < 25; i++)
	arrayOfProducts.push({
		id: 'null',
		title: 'casper arpa',
		slug: 'casper-arpa',
		categoryId: 'Кресло дизайнерское',
		price: '1000 ₽',
		images: [],
		properties: [],
	})

export const arrayOfProducts1 = arrayOfProducts
