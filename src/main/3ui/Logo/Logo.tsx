import { FC, memo } from 'react'
import style from './styles/Logo.module.scss'
import Image from 'next/image'
import {
	logoIcon,
	logoTextIcon,
} from '@/helpers/importIcons'

interface LogoProps {
	logoWithoutText?: boolean
}

const Logo: FC<LogoProps> = props => {
	return (
		<div className={style.logo}>
			<Image src={logoIcon} alt={'logo'} />
			{!props.logoWithoutText && (
				<Image src={logoTextIcon} alt={'logoText'} />
			)}
		</div>
	)
}

Logo.displayName = 'Logo'
export default memo(Logo)
