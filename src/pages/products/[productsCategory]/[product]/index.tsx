import { NextPage } from 'next'
import { memo } from 'react'
import {useRouter} from "next/router";
import Head from "next/head";
import Main from "@/main/3ui/Main/Main";

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
      <Main>

      </Main>
    </>
  )
}

Product.displayName = 'Product'
export default memo(Product)