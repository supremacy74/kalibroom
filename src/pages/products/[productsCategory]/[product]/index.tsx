import { NextPage } from 'next'
import { memo } from 'react'
import {useRouter} from "next/router";
import Head from "next/head";

interface ProductProps {

}

const Product: NextPage<ProductProps> = props => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>
          Kalibroom — {router.query.product}
        </title>
      </Head>
      <main>

      </main>
    </>
  )
}

Product.displayName = 'Product'
export default memo(Product)