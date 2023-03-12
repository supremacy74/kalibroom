import { productI } from '@/store/interfaces/product'

const arrayOfProducts: productI[] = []

for (let i = 0; i < 25; i++)
	arrayOfProducts.push({
		id: 'null',
		title: 'casper arpa',
		category: 'Кресло дизайнерское',
		price: '1000 ₽',
		images: [],
	})

export const arrayOfProducts1 = arrayOfProducts
