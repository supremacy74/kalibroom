import { categoryI } from '@/interfaces/category'
import { getRandom } from '@/helpers/commonFunctions'

const arrayOfCategories1: categoryI[] = []

for (let i = 0; i < 2; i++)
	arrayOfCategories1.push({
		id: `${Math.random()}`,
		title: 'Диваны',
		slug: 'sofas',
		properties: [
			{
				title: '2-местные',
				slug: '2-seater',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: '3-местные',
				slug: '3-seater',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: '4-местные',
				slug: '4-seater',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: 'Прямые',
				slug: 'straight',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: 'Угловые',
				slug: 'corner',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: 'Модульные',
				slug: 'modular',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
			{
				title: 'Без спального места',
				slug: 'without-a-sleeping-place',
				image: `https://random.imagecdn.app/${getRandom(
					400,
					600
				)}/${getRandom(600, 1000)}`,
			},
		],
	})

export const arrayOfCategories = arrayOfCategories1
