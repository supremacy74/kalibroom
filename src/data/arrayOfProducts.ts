import { productI } from '@/interfaces/product'
import { getRandom } from '@/helpers/commonFunctions'

const arrayOfProducts1: productI[] = []

for (let i = 0; i < 12; i++) {
	arrayOfProducts1.push({
		id: `${Math.random()}`,
		name: 'INDUSTRIAL',
		article: '',
		slug: 'industrial',
		category_id: 1,
		price: 214300,
		discount: 13,
		quantity: 8,
		sizes: ['125 см', '250 см', 'my cock'],
		images: [
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
				material: 'material',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
				material: 'material',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
				material: 'material',
			},
			{
				imageURL: `https://random.imagecdn.app/${getRandom(
					700,
					1400
				)}/${getRandom(1000, 2000)}`,
				color: 'gray',
				material: 'material',
			},
		],
		properties: [],
		materials: [
			{
				colors: ['gray'],
				title: 'Теплящая кожа',
				type: 'Кожа',
				image: `https://random.imagecdn.app/${getRandom(
					300,
					500
				)}/${getRandom(300, 500)}`,
			},
			{
				colors: ['gray'],
				title: 'Теплящая кожа',
				type: 'Кожа',
				image: `https://random.imagecdn.app/${getRandom(
					300,
					500
				)}/${getRandom(300, 500)}`,
			},
		],
		images_in_interiors: [
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
			`https://random.imagecdn.app/${getRandom(
				700,
				1400
			)}/${getRandom(1000, 2000)}`,
		],
	})
}

export const arrayOfProducts = arrayOfProducts1
