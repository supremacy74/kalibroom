import { productI } from '@/interfaces/product'
import { getRandom } from '@/helpers/commonFunctions'

const arrayOfProducts1: productI[] = []

for (let i = 0; i < 10; i++) {
	if (i % 2) {
		arrayOfProducts1.push({
			id: `${Math.random()}`,
			title: 'INDUSTRIAL',
			slug: 'industrial',
			categoryId: 1,
			price: '214 300 ₽',
			images: [
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
			],
			properties: [],
		})
	} else {
		arrayOfProducts1.push({
			id: `${Math.random()}`,
			title: 'OKSITANIA',
			slug: 'oksitania',
			categoryId: 2,
			price: '147 000 ₽',
			images: [
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
				{
				imageURL: `https://random.imagecdn.app/${getRandom(
					900,
					1400
				)}/${getRandom(1000, 1600)}`,
					color: 'gray',
				},
			],
			properties: [],
		})
	}
}

export const arrayOfProducts = arrayOfProducts1
