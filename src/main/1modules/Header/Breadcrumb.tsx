import { FC, memo, useEffect } from 'react'
import style from './styles/Breadcrumb.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Breadcrumb: FC = () => {
	const router = useRouter()
	const route = router.asPath.split('/')

	useEffect(() => {
		console.log(router.asPath.split('/'))
	}, [router])

	return (
		<div className={style.breadcrumb}>
			<div className={style.part}>
				{route.map((value, index) => {
					return (
						<>
							<Link href={'#'}>{!value ? 'Home' : value}</Link>
							{!(route.length - 1 === index) && <span>/</span>}
						</>
					)
				})}
			</div>
			<div className={style.part}></div>
		</div>
	)
}

export default memo(Breadcrumb)
