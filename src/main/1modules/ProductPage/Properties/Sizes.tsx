import {FC, memo, useState} from "react";
import {PropertyI} from "@/main/1modules/ProductPage/Properties/interfaces";
import style from "@/main/1modules/ProductPage/Properties/Properties.module.scss";

const Sizes: FC<PropertyI> = props => {
  const [currentSize, setCurrentSize] = useState(0)

  return (
    <div className={style.body}>
      {props.product.sizes?.map((value, index) => {
        return (
          <button
            key={index}
            data-is-current-size={currentSize === index}
            className={style.handlerSize}
            onClick={() => {
              setCurrentSize(index)
            }}>
            <span className={style.handlerSizeText}>{value}</span>
          </button>
        )
      })}
    </div>
  )
}

export default memo(Sizes)