import { FC, memo } from 'react'
import style from './styles/DeliveryPanel.module.scss'
import Link from 'next/link'

const DeliveryPanel: FC = () => {
	return (
		<div className={style.delivery}>
			<Link className={style.link} href={'#'}>
				Доставка
			</Link>
			<Link className={style.link} href={'#'}>
				Шоурумы
			</Link>
		</div>
	)
}

DeliveryPanel.displayName = 'DeliveryPanel'
export default memo(DeliveryPanel)
