import {
    
    ImageEdge,
    MoneyV2,
    ShopifyProduct,
    ProductOption,
    ProductVariantConnection,
    SelectedOption
  } from "../common/types/schema"
 
  import {Product   } from '../common/types/product'




  export function normalizeProduct(productNode: ShopifyProduct): Product {
    const {
      id,
      title: name,
      handle,
      vendor,
      description,
      images: imageConnection,
      priceRange,
      options,
      variants,
      ...rest
    } = productNode
   
    const product: Product = {
      id,
      name,
     
      description,
      path: `/${handle}`,
      slug: handle.replace(/^\/+|\/+$/g, ""),
      images: normalizeProductImages(imageConnection),
      price: normalizeProductPrice(priceRange.minVariantPrice),
      options: options ?
      options.filter(o => o.name !== "Title")
             .map(o => normalizeProductOption(o)) : [],
    variants: variants ?
      normalizeProductVariants(variants) : [],
    ...rest
    }
  
    return product
  }

  
  
const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) =>
edges.map(({node: { originalSrc: url, ...rest}}) => ({
  url: process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local" ?
  `/images/${url}` :
  url ?? "/product-image-placeholder.svg",
  ...rest }
))

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
value: +amount,
currencyCode
})

const normalizeProductOption = ({
id,
values,
name: displayName
}: ProductOption) => {

const normalized = {
  id,
  displayName,
  values: values.map(value => {
    let output: any = {
      label: value
    }

    if (displayName.match(/colou?r/gi)) {
      output = {
        ...output,
        hexColor: value
      }
    }

    return output
  })
}

return normalized
}

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {

return edges.map(({node}) => {
  const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node

  return {
    id,
    name: title,
    sku: sku || id,
    price: +priceV2.amount,
    listPrice: +compareAtPriceV2?.amount,
    requiresShipping: true,
    options: selectedOptions.map(({name, value}: SelectedOption) => {
      const option = normalizeProductOption({
        id,
        name,
        values: [value]
      })

      return option
    })
  }
})
}