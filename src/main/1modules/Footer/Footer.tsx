import { FC, memo } from 'react'
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
import { footerLinks } from '@/data/footerLinks'
import { useAppSelector } from '@/store/hooks'

const Footer: FC = () => {
	const theme = useAppSelector(
		state => state.theme.isDarkTheme
	)

	return (
		<div className={style.footer}>
			<Contacts theme={theme} />
			<main className={style.main}>
				<Logo />
				<div className={style.rightPart}>
					{footerLinks.map((block, blockIndex) => {
						return (
							<div key={blockIndex} className={style.block}>
								<div className={style.title}>
									{block.title}
								</div>
								<div className={style.list}>
									{block.blockList.map(
										(item, itemIndex) => {
											return (
												<Link
													key={itemIndex}
													className={style.item}
													href={item.link}>
													{item.name}
												</Link>
											)
										}
									)}
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
						{!theme && (
							<>
								<Image
									src={mastercardIcon}
									alt={'mastercardIcon'}
								/>
								<Image
									src={visaIcon}
									alt={'mastercardIcon'}
								/>
								<Image
									src={worldIcon}
									alt={'mastercardIcon'}
								/>
							</>
						)}
						{theme && (
							<>
								<Image
									src={mastercardDarkIcon}
									alt={'mastercardIcon'}
								/>
								<Image
									src={visaDarkIcon}
									alt={'mastercardIcon'}
								/>
								<Image
									src={worldDarkIcon}
									alt={'mastercardIcon'}
								/>
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

const Contacts: FC<{ theme: boolean }> = ({ theme }) => {
	return (
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
					{!theme && (
						<Image src={telegramIcon} alt={'telegram'} />
					)}
					{theme && (
						<Image
							src={telegramDarkIcon}
							alt={'telegram'}
						/>
					)}
				</Link>
				<Link className={style.link} href={''}>
					{!theme && (
						<Image src={whatsappIcon} alt={'3d'} />
					)}
					{theme && (
						<Image src={whatsappDarkIcon} alt={'3d'} />
					)}
				</Link>
			</div>
		</div>
	)
}

Footer.displayName = 'Footer'
export default memo(Footer)
