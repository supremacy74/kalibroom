import {AnimatePresence} from "framer-motion";
import {FC, memo} from "react";
import {useAppSelector} from "@/store/hooks";
import style from './Popup.module.scss'
import PopupWrapper from "@/main/3ui/Popups/PopupWrapper";
import Image from "next/image";
import {crossDarkIcon, crossIcon} from "@/helpers/importIcons";

const PopupSizes: FC = () => {
  const isVisible = useAppSelector(state => state.popups.sizePopup.isVisible)
  const theme = useAppSelector(state => state.theme.isDarkTheme)

  return (
    <AnimatePresence>
      {isVisible && (
        <PopupWrapper>
          <div className={style.sizePopup}>
            <div className={style.top}>
              <h4 className={style.title}>
                Размер
              </h4>
              <button>
                {!theme ? (
                  <Image className={style.cross} src={crossIcon} alt={'crossIcon'} />
                ) : (
                  <Image className={style.cross} src={crossDarkIcon} alt={'crossDarkIcon'} />
                )}
              </button>
            </div>
          </div>
        </PopupWrapper>
      )}
    </AnimatePresence>
  )
}

export default memo(PopupSizes)