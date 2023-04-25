import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Main from '@/main/3ui/Main/Main'
import style from '@/styles/products/ProductCategory.module.scss'
import RadioHandler from '@/main/3ui/Buttons/Handler/Handler'
import {FC, useState} from 'react'
import ButtonWithArrow from "@/main/3ui/Buttons/ButtonWithArrow/ButtonWithArrow";
import {categoryI} from "@/interfaces/category";

const ProductsCategory: NextPage = () => {
	const router = useRouter()

	const [handler, handleHandler] = useState(false)
	const [categories, setCategories] = useState<categoryI[] | undefined>(undefined)

	const getCategories = async () => {
		const response = await fetch('https://api.kalibroom.ru/api/categories')
		const preparedData = await response.json() as categoryI[]
		setCategories(preparedData)
		console.log(preparedData)
	}

	return (
		<>
			<Head>
				<title>Kalibroom — {router.query.productsCategory}</title>
			</Head>
			<Main className={style.main}>
				category
				<RadioHandler
					value={handler}
					onChange={() => handleHandler(prev => !prev)}
					name={'handler'}
				/>
				<ButtonWithArrow text={'товары'} disabled={false} onClick={() => getCategories()} />
				{categories?.map((value, index) => {
					return (
						<div key={index}>
							{value.name}
						</div>
					)
				})}
			</Main>
		</>
	)
}

const Content: FC = () => {
	return (
		<div>

		</div>
	)
}

ProductsCategory.displayName = 'ProductsCategory'
export default ProductsCategory
