import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import {getConfig} from '@framework/common/config'
import getAllProductsPaths from "@framework/product/getAllProductsPaths"
import getProduct from "@framework/product/getProduct"
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)
    const rutas =  products.map(p => ({params: {slug_p: p.slug}}))
    console.log('rutas')
    console.log(JSON.stringify(rutas))
    return {
      paths: products.map(p => ({params: {slug_p: p.slug}})),
      fallback: false
    }
  }
  
  // provide product spefici data to the page
  export const getStaticProps = async ({
    params }: GetStaticPropsContext<{slug_p: string}>
  ) => {
    const config = getConfig()
    
    const { product } = await getProduct({
      config,
      variables: {slug: params?.slug_p}
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
        { product && <div>{JSON.stringify(product)}</div>}
      </>
    )
  }
  
  ProductSlug.call