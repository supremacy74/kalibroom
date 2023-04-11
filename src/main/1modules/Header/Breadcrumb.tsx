import { FC, memo } from 'react'
import style from './styles/Breadcrumb.module.scss'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'

const Breadcrumb: FC = () => {
	const paths = useAppSelector(state => state.paths)

	return (
		<div className={style.breadcrumb}>
			<div className={style.part}>
				{paths.map((path, index) => {
					return (
						<>
							<Link className={style.link} href={path.url}>
								{path.label}
							</Link>
							{paths.length - 1 !== index && <span>/</span>}
						</>
					)
				})}
			</div>
			<div className={style.part}></div>
		</div>
	)
}

export default memo(Breadcrumb)
