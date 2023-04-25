import { FC, memo } from 'react'
import style from './styles/ProductBreadcrumb.module.scss'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'

const ProductBreadcrumb: FC = () => {
	const paths = useAppSelector(state => state.paths)

	return (
		<div className={style.breadcrumb}>
			<div className={style.parts}>
				{paths.map((path, index) => {
					return (
						<div className={style.part} key={index}>
							<Link className={style.link} href={path.url}>
								{path.label}
							</Link>
							{paths.length - 1 !== index && <span>/</span>}
						</div>
					)
				})}
			</div>
			<div className={style.parts}></div>
		</div>
	)
}

export default ProductBreadcrumb
