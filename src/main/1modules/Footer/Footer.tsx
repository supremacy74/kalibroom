import { FC, memo, useEffect, useState } from 'react'
import style from './styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {
	icon3d,
	iconDark3d,
	mastercardDarkIcon,
	mastercardIcon,
	telegramDarkIcon,
	telegramIcon,
	vectorDownDarkIcon,
	vectorDownIcon,
	visaDarkIcon,
	visaIcon,
	vkDarkIcon,
	vkIcon,
	whatsappDarkIcon,
	whatsappIcon,
	worldDarkIcon,
	worldIcon,
} from '@/helpers/importIcons'
import Logo from '@/main/3ui/Logo/Logo'
import { footerLinks, footerLinksI } from '@/data/footerLinks'
import { useAppSelector } from '@/store/hooks'
import Location from '@/main/3ui/Location/Location'
import { motion } from 'framer-motion'
import { getCommonAnimation } from '@/helpers/animations'

const Footer: FC = () => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	return (
		<div className={style.footer}>
			<Contacts theme={theme} />
			<main className={style.main}>
				<Logo className={style.logo} />
				<div className={style.rightPart}>
					{footerLinks.map((block, blockIndex) => {
						return <FooterBlock key={blockIndex} block={block} />
					})}
				</div>
			</main>
			<div className={style.bottom}>
				<div className={style.copyright}>© 2022–2023 ООО «Kalibroom»</div>
				<div className={style.paymentMethod}>
					<div className={style.paymentMethodTitle}>Способы оплаты</div>
					<div className={style.paymentMethodList}>
						{!theme && (
							<>
								<Image src={mastercardIcon} alt={'mastercardIcon'} />
								<Image src={visaIcon} alt={'mastercardIcon'} />
								<Image src={worldIcon} alt={'mastercardIcon'} />
							</>
						)}
						{theme && (
							<>
								<Image src={mastercardDarkIcon} alt={'mastercardIcon'} />
								<Image src={visaDarkIcon} alt={'mastercardIcon'} />
								<Image src={worldDarkIcon} alt={'mastercardIcon'} />
							</>
						)}
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

interface FooterBlockI {
	block: footerLinksI
}

const FooterBlock: FC<FooterBlockI> = props => {
	const theme = useAppSelector(state => state.theme.isDarkTheme)

	const [isVisible, handleVisible] = useState<boolean>(false)
	const [isMobile, handleIiMobile] = useState<boolean>(false)

	const resizeFunction = async () => {
		if (innerWidth > 720) {
			handleIiMobile(false)
		} else {
			handleIiMobile(true)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', resizeFunction)
		return () => window.removeEventListener('resize', resizeFunction)
	}, [])

	return (
		<div className={style.block}>
			<div
				onClick={() => {
					if (isMobile) {
						handleVisible(prev => !prev)
					}
				}}
				className={style.title}>
				<span>{props.block.title}</span>
				{!theme && (
					<Image
						className={style.titleVector}
						data-is-visible={isVisible}
						src={vectorDownIcon}
						alt={'vectorDownIcon'}
					/>
				)}
				{theme && (
					<Image
						className={style.titleVector}
						data-is-visible={isVisible}
						src={vectorDownDarkIcon}
						alt={'vectorDownDarkIcon'}
					/>
				)}
			</div>
			{(isVisible || !isMobile) && (
				<motion.div
					{...getCommonAnimation()}
					transition={getCommonAnimation()}
					className={style.list}>
					{props.block.blockList.map((item, itemIndex) => {
						return (
							<Link key={itemIndex} className={style.item} href={item.link}>
								{item.name}
							</Link>
						)
					})}
				</motion.div>
			)}
		</div>
	)
}

const Contacts: FC<{ theme: boolean }> = ({ theme }) => {
	return (
		<div className={style.contacts}>
			<div className={style.contactsBlock}>
				<Location className={style.location} />
				<div className={`${style.mailContact} ${style.contact}`}>
					mymailadress@kalibroom.com
				</div>
				<div className={`${style.phoneContact} ${style.contact}`}>
					Тел:+7 999 999-99-99
				</div>
				<div className={`${style.timeContact} ${style.contact}`}>
					Работаем: пн-пт с 9 до 21
				</div>
			</div>
			<div className={style.links}>
				<Link className={style.link} href={''}>
					{!theme && <Image src={icon3d} alt={'3d'} />}
					{theme && <Image src={iconDark3d} alt={'3d'} />}
				</Link>
				<Link className={style.link} href={''}>
					{!theme && <Image src={vkIcon} alt={'vk'} />}
					{theme && <Image src={vkDarkIcon} alt={'vk'} />}
				</Link>
				<Link className={style.link} href={''}>
					{!theme && <Image src={telegramIcon} alt={'telegram'} />}
					{theme && <Image src={telegramDarkIcon} alt={'telegram'} />}
				</Link>
				<Link className={style.link} href={''}>
					{!theme && <Image src={whatsappIcon} alt={'3d'} />}
					{theme && <Image src={whatsappDarkIcon} alt={'3d'} />}
				</Link>
			</div>
		</div>
	)
}

Footer.displayName = 'Footer'
export default memo(Footer)
