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
				imageURL: `https://source.unsplash.com/${getRandom(
					400,
					800
				)}x${getRandom(600, 1200)}`,
				color: 'gray',
				material: 'material',
			},
			{
				imageURL: `https://source.unsplash.com/${getRandom(
					400,
					800
				)}x${getRandom(600, 1200)}`,
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
				image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
					600,
					1200
				)}`,
			},
			{
				colors: ['gray'],
				title: 'Теплящая кожа',
				type: 'Кожа',
				image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
					600,
					1200
				)}`,
			},
		],
		images_in_interiors: [
			`https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
				600,
				1200
			)}`,
			`https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
				600,
				1200
			)}`,
			`https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
				600,
				1200
			)}`,
			`https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(
				600,
				1200
			)}/?nature`,
		],
	})
}

export const arrayOfProducts = arrayOfProducts1
