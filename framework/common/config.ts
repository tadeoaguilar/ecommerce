export type ApiFetcherOptions = {
    query: string
    variables?: Variables
  }
  
  export  type Variables = {[key: string]: string | any | undefined}
  
  export type ApiFetcherResults<T> = {
    data: T
  }
  
  export interface ApiConfig {
    fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
    checkoutCookie: string
  }
  
  
  export type ApiFetcher<T = any> = (
    options: ApiFetcherOptions
  ) => Promise<ApiFetcherResults<T>>
  
  class Config {
    private config: ApiConfig
  
    constructor(config: ApiConfig) {
      this.config = config
    }
  
    getConfig(): ApiConfig {
      return this.config
    }
  }

  export const fetchApi = async <T>({
    query,
    variables }: ApiFetcherOptions
  ): Promise<ApiFetcherResults<T>> => {
    const res = await fetch(process.env.SHOPIFY_URL || '', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || ''
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
    const { data, errors} = await res.json()
    // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
    // || is checking if left hand expression is null, undefined, "", 0, false
    if (errors) {
      throw new Error(errors[0].message ?? errors.message)
    }
  
    return { data }
  }



  export const configWrapper = new Config({
    fetch: fetchApi,

    checkoutCookie: 'shopify_checkoutId'
  })
  
  
export function getConfig() {
    return configWrapper.getConfig()
  }

