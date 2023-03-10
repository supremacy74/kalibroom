import {FC, memo} from "react";
import style from './styles/Footer.module.scss'
import Link from "next/link";
import Image from "next/image";
import {icon3d, telegramIcon, vkIcon, whatsappIcon} from "@/helpers/importIcons";
import Logo from "@/main/3ui/Logo/Logo";

const Footer: FC = () => {
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
			]
		},
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
			]
		}
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
				<Logo />
				<div className={style.rightPart}>
					<div className={style.block}>
						<div className={style.blockTitle}>

						</div>
						<div className={style.blockList}>

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default memo(Footer)
