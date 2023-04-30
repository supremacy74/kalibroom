import { FC, memo, useEffect, useState } from 'react'
import style from './ContainerForCells.module.scss'
import Product from '@/main/2components/Product/Product'
import { productI } from '@/interfaces/product'
import { motion } from 'framer-motion'
import {commonProduct} from "@/data/commonProduct";

interface ContainerForCellsProps {
	array: productI[]
}

const ContainerForCells: FC<ContainerForCellsProps> = props => {
	const [columnsArray, setColumnsArray] = useState([1, 2, 3, 4])
	const skeletons = Array.from({length: 20})

	const checkClientWidth = async () => {
		if (window.innerWidth <= 840) {
			setColumnsArray([1, 2])
		} else if (window.innerWidth <= 1200) {
			setColumnsArray([1, 2, 3])
		} else {
			setColumnsArray([1, 2, 3, 4])
		}
	}

	useEffect(() => {
		checkClientWidth()
		window.addEventListener('resize', async () => checkClientWidth())
		return () =>
			window.removeEventListener('resize', async () => checkClientWidth())
	}, [])

	return (
		<div className={style.container}>
			{columnsArray.map((columnValue, columnIndex) => {
				return (
					<motion.div
						key={columnIndex}
						className={style.column}
						style={{
							maxWidth: `calc(${100 / columnsArray.length}% - .75rem)`,
						}}
					>
						{props.array.length && props.array.map((product, index) => {
							if (columnIndex === index % columnsArray.length) {
								return <Product key={index} product={product} />
							}
						})}
					</motion.div>
				)
			})}
		</div>
	)
}

ContainerForCells.displayName = 'ContainerForCells'
export default ContainerForCells
