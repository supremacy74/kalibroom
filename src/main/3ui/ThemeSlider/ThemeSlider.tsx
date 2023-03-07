import {Dispatch, FC, memo, SetStateAction} from 'react'
import style from './styles/ThemeSlider.module.scss'
import {motion} from "framer-motion";
import {getSpringTransition} from "@/helpers/animations";
import Image from "next/image";
import {moonIcon, sunIcon} from "@/helpers/importIcons";

interface ThemeSliderProps {
  isDarkTheme: boolean
  handleTheme: Dispatch<SetStateAction<boolean>>
}

const ThemeSlider: FC<ThemeSliderProps> = props => {
  return (
    <div className={style.slideButtonWrapper}>
      <motion.button
        onClick={() => props.handleTheme(prev => !prev)}
        data-isOn={props.isDarkTheme}
        className={style.slideButton}>
        <motion.div
          layout
          transition={getSpringTransition(30, 185)}
          className={style.slideCircle}>
          <Image
            className={style.slideLeftImage}
            src={moonIcon}
            alt={'moonIcon'}
          />
          <Image
            className={style.slideRightImage}
            src={sunIcon}
            alt={'sunIcon'}
          />
        </motion.div>
      </motion.button>
    </div>
  )
}

ThemeSlider.displayName = 'ThemeSlider'
export default memo(ThemeSlider)