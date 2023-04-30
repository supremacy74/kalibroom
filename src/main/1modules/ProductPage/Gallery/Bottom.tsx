import {FC} from "react";
import style from './Gallery.module.scss'
import {useAppDispatch, useAppSelector} from "@/store/hooks";

const Bottom: FC = () => {
  const currentImages = useAppSelector(state => state.productPage.currentImages)
  const currentImage = useAppSelector(state => state.productPage.currentImageIndex)

  const dispatch = useAppDispatch()

  const setterCurrentImageIndex = (data: number) => {
    
  }

  return (
    <div className={style.bottom}>

    </div>
  )
}

export default Bottom