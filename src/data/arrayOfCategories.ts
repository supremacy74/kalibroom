import { categoryI } from '@/interfaces/category'

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
				image: '123'
			},
			{
				title: '3-местные',
				slug: '3-seater',
			},
			{
				title: '4-местные',
				slug: '4-seater',
			},
			{
				title: 'Прямые',
				slug: 'straight',
			},
			{
				title: 'Угловые',
				slug: 'corner',
			},
			{
				title: 'Модульные',
				slug: 'modular',
			},
			{
				title: 'Без спального места',
				slug: 'without-a-sleeping-place',
			},
		],
	})

export const arrayOfCategories = arrayOfCategories1
