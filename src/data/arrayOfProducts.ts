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
				imageURL: ``,
				color: 'gray',
				material: 'material',
			},
			{
				imageURL: ``,
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
				image: ``,
			},
			{
				colors: ['gray'],
				title: 'Теплящая кожа',
				type: 'Кожа',
				image: ``,
			},
		],
		images_in_interiors: [
			``,
			``,
			``,
			``,
		],
	})
}

export const arrayOfProducts = arrayOfProducts1
