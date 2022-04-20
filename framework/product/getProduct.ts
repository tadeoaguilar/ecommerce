

import { ApiConfig, Variables } from "@framework/common/types/api";
import {  normalizeProduct } from "@framework/product/normalize";

import { ShopifyProduct } from "@framework/common/types/schema"
import { Product } from "@framework/common/types/product"

type FetchType = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}

const getProduct = async (options: {
  config: ApiConfig,
  variables: Variables
}): Promise<ReturnType> => {
  const { config, variables } = options

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    variables
  })

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null
  }
}

export default getProduct

const getProductQuery = `
query productByHandle($slug: String!) {
  productByHandle(handle: $slug) {
    id
    handle
    title
    vendor
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
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
    images(first: 250) {
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


