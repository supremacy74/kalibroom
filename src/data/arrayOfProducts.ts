import {
	extendedProductI,
	productI,
} from '@/interfaces/product'
import { getRandom } from '@/helpers/commonFunctions'

const arrayOfProducts1: productI[] = []
const arrayOfProductsExtended1: extendedProductI[] = []

for (let i = 0; i < 12; i++) {
	arrayOfProducts1.push({
		id: `${Math.random()}`,
		title: 'INDUSTRIAL',
		slug: 'industrial',
		categoryId: 1,
		price: '214 300 ₽',
		images: [
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
		],
		properties: [],
	})
	arrayOfProductsExtended1.push({
		id: `${Math.random()}`,
		title: 'INDUSTRIAL',
		slug: 'industrial',
		categoryId: 1,
		price: '214 300 ₽',
		images: [
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
			},
		],
		properties: [],
		description: 'wow, its description',
		colors: ['gray', 'red'],
		size: ['125 см', '250 см', 'my cock'],
		priceWithoutDiscount: '3000',
		installmentPlan: '4000',
		specifications: '123',
		presenceInShowrooms: '123',
	})
}

export const arrayOfProducts = arrayOfProducts1
export const arrayOfProductsExtended =
	arrayOfProductsExtended1
