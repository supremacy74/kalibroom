import { categoryI } from '@/interfaces/category'
import { getRandom } from '@/helpers/commonFunctions'
import { mainImage } from "@/helpers/importImages";

const arrayOfCategories1: categoryI[] = []

for (let i = 0; i < 2; i++) {
		arrayOfCategories1.push({
				id: `${Math.random()}`,
				title: 'Диваны',
				slug: 'sofas',
				properties: [
					{
						// @ts-ignore
						title: '2-местные',
						slug: '2-seater',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: '3-местные',
						slug: '3-seater',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: '4-местные',
						slug: '4-seater',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: 'Прямые',
						slug: 'straight',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: 'Угловые',
						slug: 'corner',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: 'Модульные',
						slug: 'modular',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
					{
						// @ts-ignore
						title: 'Без спального места',
						slug: 'without-a-sleeping-place',
						image: `https://source.unsplash.com/${getRandom(400, 800)}x${getRandom(600, 1200)}`,
					},
				],
			})
	}

export const arrayOfCategories = arrayOfCategories1
