export interface ProductImage {
    url: string
    alt?: string
  }
  
  export interface ProductPrice {
    value: number
    currencyCode: "USD" | "EUR" | string
  }
  
  export interface ProductOptionValues {
    label: string
    hexColor?: string
  }
  
  
  
  export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    images: ProductImage[]
    price: ProductPrice
    options: ProductOption[],
    variants: ProductVariantTest[]
  }
  export interface ProductOption {
    id: string
    displayName: string
    values: ProductOptionValues[]
  }
  
  export interface ProductVariantTest {
    id: string
    name: string
    sku: string
    image?: ProductImage
    requiresShipping: boolean
    price: number
    listPrice: number
    options: ProductOption[]
  }