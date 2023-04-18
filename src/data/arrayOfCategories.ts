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
						image: ``,
					},
					{
						// @ts-ignore
						title: '3-местные',
						slug: '3-seater',
						image: ``,
					},
					{
						// @ts-ignore
						title: '4-местные',
						slug: '4-seater',
						image: ``,
					},
					{
						// @ts-ignore
						title: 'Прямые',
						slug: 'straight',
						image: ``,
					},
					{
						// @ts-ignore
						title: 'Угловые',
						slug: 'corner',
						image: ``,
					},
					{
						// @ts-ignore
						title: 'Модульные',
						slug: 'modular',
						image: ``,
					},
					{
						// @ts-ignore
						title: 'Без спального места',
						slug: 'without-a-sleeping-place',
						image: ``,
					},
				],
			})
	}

export const arrayOfCategories = arrayOfCategories1
