import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import {getConfig} from '@framework/common/config'
import getAllProductsPaths from "@framework/product/getAllProductsPaths"
import getProduct from "@framework/product/getProduct"
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)
  
    return {
      paths: products.map(p => ({params: {slug: p.slug}})),
      fallback: false
    }
  }
  
  // provide product spefici data to the page
  export const getStaticProps = async ({
    params }: GetStaticPropsContext<{slug: string}>
  ) => {
    const config = getConfig()
  
    const { product } = await getProduct({
      config,
      variables: {slug: params?.slug}
    })
  
    return {
      props: {
        product
      }
    }
  }

  export default function ProductSlug({
    product }: InferGetStaticPropsType<typeof getStaticProps>
  ) {
  
    return (
      <>
        { product && <div>{product.name}</div>}
      </>
    )
  }
  
  ProductSlug.call