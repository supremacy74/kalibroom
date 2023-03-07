import { FC, memo } from 'react'
import style from './styles/Header.module.scss'
import Logo from "@/main/3ui/Logo/Logo";

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
	return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <div className={`${style.topPart} ${style.part}`}>
          <div className={style.cell}>
            <Logo />
          </div>
          <div className={style.cell}>

          </div>
        </div>
        <div className={`${style.bottomPart} ${style.part}`}>

        </div>
      </header>
    </div>
  )
}

Header.displayName = 'Header'
export default memo(Header)
