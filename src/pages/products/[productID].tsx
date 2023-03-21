import { FC, memo } from 'react'
import style from '@/styles/ProductPage.module.scss'
import { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: {} }],
		fallback: false,
	}
}

const ProductPage: FC = () => {
	return (
    <div className={style.page}>

    </div>
  )
}

ProductPage.displayName = 'ProductPage'
export default memo(ProductPage)
