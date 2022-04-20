import { ApiConfig } from '@framework/common/config'
import { Product } from "@framework/common/types/product"
import { ProductConnection } from "@framework/common/types/schema"



type ReturnType = {
  products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {

  const { data } = await config.fetch<{products: ProductConnection}>({
    query: getAllProductsPathsQuery})

  const products = data.products.edges.map(({node: {handle}}) => {
    return {
      slug: handle
    }
  })

  return { products }
}

export default getAllProductsPaths

const getAllProductsPathsQuery = `
  query getAllProductsPaths($first: Int = 250) {
    products(first: $first) {
      edges {
        node {
          handle
        }
      }
    }
  }
`


