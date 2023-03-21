import { FC, memo, useEffect, useState } from 'react'
import style from './styles/ContainerForCells.module.scss'
import Product from '@/main/2components/Product/Product'
import { productI } from '@/interfaces/product'

interface ContainerForCellsProps {
	array: productI[]
}

const ContainerForCells: FC<
	ContainerForCellsProps
> = props => {
	const [columnsArray, setColumnsArray] = useState([
		1, 2, 3, 4,
	])

	const checkClientWidth = () => {
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
		window.addEventListener('resize', () =>
			checkClientWidth()
		)
		return () =>
			window.removeEventListener('resize', () =>
				checkClientWidth()
			)
	}, [])

	return (
		<div className={style.container}>
			{columnsArray.map((columnValue, columnIndex) => {
				return (
					<div key={columnIndex} className={style.column}>
						{props.array.map((value, index) => {
							if (
								(columnIndex + index) %
									columnsArray.length ===
								0
							) {
								return (
									<Product
										key={index}
										price={value.price}
										title={value.title}
										category={`Кресло дизайнерское ${index}`}
									/>
								)
							}
						})}
					</div>
				)
			})}
		</div>
	)
}

ContainerForCells.displayName = 'ContainerForCells'
export default memo(ContainerForCells)
