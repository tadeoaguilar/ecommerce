import { config } from "process"

import {normalizeProduct} from './normalize'
import {ProductConnection} from './types/schema'
import {Product} from './types/product'
import {ApiConfig} from './types/api'

type ReturnType = {
    products: ProductConnection
  }
  

  
  export const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    
    
    const { data } = await config.fetch<ReturnType>({
        query: getAllProductsQuery
      })
    console.log(data.products.edges[0].node.images.edges)
    const products = data.products.edges.map(({ node: product }) =>

      normalizeProduct(product)
      
    ) ?? []
    
    return products
  }
  
  
  



  const productConnection = `
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      vendor
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 250) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            sku
            selectedOptions {
              name
              value
            }
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
              currencyCode
            }
          }
        }
      }
      images(first: 1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
    }
  }
`

const getAllProductsQuery = `
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      ${productConnection}
    }
  }
`

  export default getAllProducts