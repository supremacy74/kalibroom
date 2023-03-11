import { FC, memo } from 'react'
import style from './styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {
	icon3d,
	mastercardIcon,
	telegramIcon, visaIcon,
	vkIcon,
	whatsappIcon,
	worldIcon,
} from '@/helpers/importIcons'
import Logo from '@/main/3ui/Logo/Logo'

interface FooterI {
	isDarkTheme?: boolean
}

const Footer: FC<FooterI> = props => {
	const blocks = [
		{
			title: 'Товары',
			blockList: [
				{
					name: 'Диваны',
					link: '',
				},
				{
					name: 'Кровати',
					link: '',
				},
				{
					name: 'Стулья',
					link: '',
				},
				{
					name: 'Кресла',
					link: '',
				},
				{
					name: 'Аксессуары',
					link: '',
				},
				{
					name: 'Столы',
					link: '',
				},
			],
		},
		{
			title: 'Компания',
			blockList: [
				{
					name: 'О нас',
					link: '',
				},
				{
					name: 'Шоурум',
					link: '',
				},
				{
					name: 'В наличии',
					link: '',
				},
				{
					name: 'Доставка',
					link: '',
				},
			],
		},
		{
			title: 'Услуги',
			blockList: [
				{
					name: 'Сборка мебели',
					link: '',
				},
				{
					name: 'Погрузка',
					link: '',
				},
				{
					name: 'Отправка в другой город',
					link: '',
				},
				{
					name: 'Изготовление на заказ',
					link: '',
				},
			],
		},
	]

	return (
		<div className={style.footer}>
			<div className={style.contacts}>
				<div className={style.mailContact}>
					mymailadress@kalibroom.com
				</div>
				<div className={style.phoneContact}>
					Тел:+7 999 999-99-99
				</div>
				<div className={style.timeContact}>
					Работаем: пн-пт с 9 до 21
				</div>
				<Link className={style.link} href={''}>
					<Image src={icon3d} alt={'3d'} />
				</Link>
				<Link className={style.link} href={''}>
					<Image src={vkIcon} alt={'3d'} />
				</Link>
				<Link className={style.link} href={''}>
					<Image src={telegramIcon} alt={'3d'} />
				</Link>
				<Link className={style.link} href={''}>
					<Image src={whatsappIcon} alt={'3d'} />
				</Link>
			</div>
			<main className={style.main}>
				<Logo isDarkTheme={props.isDarkTheme}/>
				<div className={style.rightPart}>
					{blocks.map(block => {
						return (
							<div className={style.block}>
								<div className={style.title}>
									{block.title}
								</div>
								<div className={style.list}>
									{block.blockList.map(item => {
										return (
											<Link
												className={style.item}
												href={item.link}>
												{item.name}
											</Link>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
			</main>
			<div className={style.bottom}>
				<div className={style.copyright}>
					© 2022–2023 ООО «Kalibroom»
				</div>
				<div className={style.paymentMethod}>
					<div className={style.paymentMethodTitle}>
						Способы оплаты
					</div>
					<div className={style.paymentMethodList}>
						<Image
							src={mastercardIcon}
							alt={'mastercardIcon'}
						/>
						<Image src={visaIcon} alt={'mastercardIcon'} />
						<Image src={worldIcon} alt={'mastercardIcon'} />
					</div>
				</div>
				<Link className={style.bottomLink} href={''}>
					Правила пользования
				</Link>
				<Link className={style.bottomLink} href={''}>
					Политика конфиденциальности
				</Link>
				<Link className={style.bottomLink} href={''}>
					Публичная оферта
				</Link>
			</div>
		</div>
	)
}

export default memo(Footer)
