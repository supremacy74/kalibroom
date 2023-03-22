import { productI } from '@/interfaces/product'

const arrayOfProducts1: productI[] = []

for (let i = 0; i < 25; i++)
	arrayOfProducts1.push({
		id: `${Math.random()}`,
		title: 'casper arpa',
		slug: 'casper-arpa',
		categoryId: 'Кресло дизайнерское',
		price: '1000 ₽',
		images: [],
		properties: [],
	})

export const arrayOfProducts = arrayOfProducts1
