export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   *
   */
  URL: any
}

/** A version of the API. */
export type ApiVersion = {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/concepts/about-apis/versioning). */
  supported: Scalars['Boolean']
}
   





/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
}

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
}



/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = {
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection
}



/** Represents an image resource. */
export type Image = {
  __typename?: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: Scalars['URL']
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>
}

/** Represents an image resource. */


/** An auto-generated type for paginating through multiple Images. */
export type ImageConnection = {
  __typename?: 'ImageConnection'
  /** A list of edges. */
  edges: Array<ImageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** List of supported image content types. */
export enum ImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/** An auto-generated type which holds one Image and a cursor during pagination. */
export type ImageEdge = {
  __typename?: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: Image
}

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export type Metafield = Node & {
  __typename?: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResource
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime']
  /** The value of a metafield. */
  value: Scalars['String']
  /** Represents the metafield value type. */
  valueType: MetafieldValueType
}

/** An auto-generated type for paginating through multiple Metafields. */
export type MetafieldConnection = {
  __typename?: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<MetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Metafield and a cursor during pagination. */
export type MetafieldEdge = {
  __typename?: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: Metafield
}

/** A resource that the metafield belongs to. */
export type MetafieldParentResource = ShopifyProduct | ProductVariant

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string metafield. */
  String = 'STRING',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING',
}



export type MoneyV2 = {
  __typename?: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/** An auto-generated type for paginating through multiple MoneyV2s. */
export type MoneyV2Connection = {
  __typename?: 'MoneyV2Connection'
  /** A list of edges. */
  edges: Array<MoneyV2Edge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one MoneyV2 and a cursor during pagination. */
export type MoneyV2Edge = {
  __typename?: 'MoneyV2Edge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MoneyV2Edge. */
  node: MoneyV2
}

/** An auto-generated type for paginating through multiple Collections. */
export type CollectionConnection = {
__typename?: 'CollectionConnection'
/** A list of edges. */
edges: Array<CollectionEdge>
/** Information to aid in pagination. */
pageInfo: PageInfo
}
export type CollectionEdge = {
__typename?: 'CollectionEdge'
/** A cursor for use in pagination. */
cursor: Scalars['String']
/** The item at the end of CollectionEdge. */
node: Collection
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type Collection = Node & {
__typename?: 'Collection'
/** Stripped description of the collection, single line with HTML tags removed. */
description: Scalars['String']
/** The description of the collection, complete with HTML formatting. */
descriptionHtml: Scalars['HTML']
/**
 * A human-friendly unique string for the collection automatically generated from its title.
 * Limit of 255 characters.
 */
handle: Scalars['String']
/** Globally unique identifier. */
id: Scalars['ID']
/** Image associated with the collection. */
image?: Maybe<Image>
/** List of products in the collection. */
products: ProductConnection
/** The collection’s name. Limit of 255 characters. */
title: Scalars['String']
/** The date and time when the collection was last modified. */
updatedAt: Scalars['DateTime']
}
/** An object with an ID to support global identification. */
export type Node = {
  /** Globally unique identifier. */
  id: Scalars['ID']
}

/** An auto-generated type which holds one Media and a cursor during pagination. */
export type MediaEdge = {
__typename?: 'MediaEdge'
/** A cursor for use in pagination. */
cursor: Scalars['String']
/** The item at the end of MediaEdge. */
node: Media
}

export type Media = {
/** A word or phrase to share the nature or contents of a media. */
alt?: Maybe<Scalars['String']>
/** The media content type. */
mediaContentType: MediaContentType
/** The preview image for the media. */
previewImage?: Maybe<Image>
}

/** The possible content types for a media object. */
export enum MediaContentType {
/** An externally hosted video. */
ExternalVideo = 'EXTERNAL_VIDEO',
/** A Shopify hosted image. */
Image = 'IMAGE',
/** A 3d model. */
Model_3D = 'MODEL_3D',
/** A Shopify hosted video. */
Video = 'VIDEO',
}

/** An auto-generated type for paginating through multiple Media. */
export type MediaConnection = {
__typename?: 'MediaConnection'
/** A list of edges. */
edges: Array<MediaEdge>
/** Information to aid in pagination. */
pageInfo: PageInfo
}
/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProduct = Node &
  HasMetafields & {
    __typename?: 'Product'
    /** Indicates if at least one product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /** List of collections a product belongs to. */
    collections: CollectionConnection
    /** The compare at price of the product across all variants. */
    compareAtPriceRange: ProductPriceRange
    /** The date and time when the product was created. */
    createdAt: Scalars['DateTime']
    /** Stripped description of the product, single line with HTML tags removed. */
    description: Scalars['String']
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars['HTML']
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     */
    handle: Scalars['String']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** List of images associated with the product. */
    images: ImageConnection
    /** The media associated with the product. */
    media: MediaConnection
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection
    /**
     * The online store URL for the product.
     * A value of `null` indicates that the product is not published to the Online Store sales channel.
     */
    onlineStoreUrl?: Maybe<Scalars['URL']>
    /** List of product options. */
    options: Array<ProductOption>
    /** List of price ranges in the presentment currencies for this shop. */
    presentmentPriceRanges: ProductPriceRangeConnection
    /** The price range. */
    priceRange: ProductPriceRange
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType: Scalars['String']
    /** The date and time when the product was published to the channel. */
    publishedAt: Scalars['DateTime']
    /** The product's SEO information. */
    seo: Seo
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     */
    tags: Array<Scalars['String']>
    /** The product’s title. */
    title: Scalars['String']
    /** The total quantity of inventory in stock for this Product. */
    totalInventory?: Maybe<Scalars['Int']>
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     */
    updatedAt: Scalars['DateTime']
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     */
    variantBySelectedOptions?: Maybe<ProductVariant>
    /** List of the product’s variants. */
    variants: ProductVariantConnection
    /** The product’s vendor name. */
    vendor: Scalars['String']
  }

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductImagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductImageSortKeys>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMediaArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductOptionsArgs = {
  first?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductPresentmentPriceRangesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}
/** Specifies the input fields required for a selected option. */
export type SelectedOptionInput = {
/** The product option’s name. */
name: Scalars['String']
/** The product option’s value. */
value: Scalars['String']
}
/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<SelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** An auto-generated type for paginating through multiple Products. */
export type ProductConnection = {
  __typename?: 'ProductConnection'
  /** A list of edges. */
  edges: Array<ProductEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one Product and a cursor during pagination. */
export type ProductEdge = {
  __typename?: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: ShopifyProduct
}

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeys {
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 */
export type ProductOption = Node & {
  __typename?: 'ProductOption'
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The product option’s name. */
  name: Scalars['String']
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>
}

/** The price range of the product. */
export type ProductPriceRange = {
  __typename?: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/** An auto-generated type for paginating through multiple ProductPriceRanges. */
export type ProductPriceRangeConnection = {
  __typename?: 'ProductPriceRangeConnection'
  /** A list of edges. */
  edges: Array<ProductPriceRangeEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductPriceRange and a cursor during pagination. */
export type ProductPriceRangeEdge = {
  __typename?: 'ProductPriceRangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPriceRangeEdge. */
  node: ProductPriceRange
}

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml). */
export type UnitPriceMeasurement = {
__typename?: 'UnitPriceMeasurement'
/** The type of unit of measurement for the unit price measurement. */
measuredType?: Maybe<UnitPriceMeasurementMeasuredType>
/** The quantity unit for the unit price measurement. */
quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
/** The quantity value for the unit price measurement. */
quantityValue: Scalars['Float']
/** The reference unit for the unit price measurement. */
referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnit>
/** The reference value for the unit price measurement. */
referenceValue: Scalars['Int']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariant = Node &
  HasMetafields & {
    __typename?: 'ProductVariant'
    /**
     * Indicates if the product variant is in stock.
     * @deprecated Use `availableForSale` instead
     */
    available?: Maybe<Scalars['Boolean']>
    /** Indicates if the product variant is available for sale. */
    availableForSale: Scalars['Boolean']
    /**
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
     * @deprecated Use `compareAtPriceV2` instead
     */
    compareAtPrice?: Maybe<Scalars['Money']>
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
    compareAtPriceV2?: Maybe<MoneyV2>
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock: Scalars['Boolean']
    /** Globally unique identifier. */
    id: Scalars['ID']
    /** Image associated with the product variant. This field falls back to the product image if no image is available. */
    image?: Maybe<Image>
    /** The metafield associated with the resource. */
    metafield?: Maybe<Metafield>
    /** A paginated list of metafields associated with the resource. */
    metafields: MetafieldConnection
    /** List of prices and compare-at prices in the presentment currencies for this shop. */
    presentmentPrices: ProductVariantPricePairConnection
    /** List of unit prices in the presentment currencies for this shop. */
    presentmentUnitPrices: MoneyV2Connection
    /**
     * The product variant’s price.
     * @deprecated Use `priceV2` instead
     */
    price: Scalars['Money']
    /** The product variant’s price. */
    priceV2: MoneyV2
    /** The product object that the product variant belongs to. */
    product: ShopifyProduct
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable?: Maybe<Scalars['Int']>
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping: Scalars['Boolean']
    /** List of product options applied to the variant. */
    selectedOptions: Array<SelectedOption>
    /** The SKU (stock keeping unit) associated with the variant. */
    sku?: Maybe<Scalars['String']>
    /** The product variant’s title. */
    title: Scalars['String']
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice?: Maybe<MoneyV2>
    /** The unit price measurement for the variant. */
    unitPriceMeasurement?: Maybe<UnitPriceMeasurement>
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight?: Maybe<Scalars['Float']>
    /** Unit of measurement for weight. */
    weightUnit: WeightUnit
  }

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<CropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantPresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantPresentmentUnitPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An auto-generated type for paginating through multiple ProductVariants. */
export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<ProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductVariant and a cursor during pagination. */
export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant
}
/** Information about pagination in a connection. */
export type PageInfo = {
__typename?: 'PageInfo'
/** Indicates if there are more pages to fetch. */
hasNextPage: Scalars['Boolean']
/** Indicates if there are any pages prior to the current page. */
hasPreviousPage: Scalars['Boolean']
}
/** The compare-at price and price of a variant sharing a currency. */
export type ProductVariantPricePair = {
  __typename?: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>
  /** The price of the variant with associated currency. */
  price: MoneyV2
}

/** An auto-generated type for paginating through multiple ProductVariantPricePairs. */
export type ProductVariantPricePairConnection = {
  __typename?: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination. */
export type ProductVariantPricePairEdge = {
  __typename?: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeys {
/** Sort by the `title` value. */
Title = 'TITLE',
/** Sort by the `updated_at` value. */
UpdatedAt = 'UPDATED_AT',
/** Sort by the `id` value. */
Id = 'ID',
/**
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
 * results by relevance to the search term(s). When no search query is specified, this sort key is not
 * deterministic and should not be used.
 */
Relevance = 'RELEVANCE',
}
/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<CollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodeArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodesArgs = {
  ids: Array<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageByHandleArgs = {
  handle: Scalars['String']
}

/** The set of valid sort keys for the Page query. */
export enum PageSortKeys {
/** Sort by the `title` value. */
Title = 'TITLE',
/** Sort by the `updated_at` value. */
UpdatedAt = 'UPDATED_AT',
/** Sort by the `id` value. */
Id = 'ID',
/**
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
 * results by relevance to the search term(s). When no search query is specified, this sort key is not
 * deterministic and should not be used.
 */
Relevance = 'RELEVANCE',
}
/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<PageSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductRecommendationsArgs = {
  productId: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTagsArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTypesArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<ProductSortKeys>
  query?: Maybe<Scalars['String']>
}

/** SEO information. */
export type Seo = {
  __typename?: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}



/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 */
export type SelectedOption = {
  __typename?: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}




/** An auto-generated type for paginating through multiple Strings. */
export type StringConnection = {
  __typename?: 'StringConnection'
  /** A list of edges. */
  edges: Array<StringEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An auto-generated type which holds one String and a cursor during pagination. */
export type StringEdge = {
  __typename?: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}





/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing areas. */
  Area = 'AREA',
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnit {
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** Metric system unit of volume. */
  L = 'L',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
}



/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
}



export type GetSiteCollectionsQueryVariables = Exact<{
  first: Scalars['Int']
}>

export type GetSiteCollectionsQuery = { __typename?: 'QueryRoot' } & {
  collections: { __typename?: 'CollectionConnection' } & {
    edges: Array<
      { __typename?: 'CollectionEdge' } & {
        node: { __typename?: 'Collection' } & Pick<
          Collection,
          'id' | 'title' | 'handle'
        >
      }
    >
  }
}

export type GetAllPagesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
}>

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type Page = Node & {
__typename?: 'Page'
/** The description of the page, complete with HTML formatting. */
body: Scalars['HTML']
/** Summary of the page body. */
bodySummary: Scalars['String']
/** The timestamp of the page creation. */
createdAt: Scalars['DateTime']
/** A human-friendly unique string for the page automatically generated from its title. */
handle: Scalars['String']
/** Globally unique identifier. */
id: Scalars['ID']
/** The page's SEO information. */
seo?: Maybe<Seo>
/** The title of the page. */
title: Scalars['String']
/** The timestamp of the latest page update. */
updatedAt: Scalars['DateTime']
/** The url pointing to the page accessible from the web. */
url: Scalars['URL']
}

/** An auto-generated type for paginating through multiple Pages. */
export type PageConnection = {
__typename?: 'PageConnection'
/** A list of edges. */
edges: Array<PageEdge>
/** Information to aid in pagination. */
pageInfo: PageInfo
}

/** An auto-generated type which holds one Page and a cursor during pagination. */
export type PageEdge = {
__typename?: 'PageEdge'
/** A cursor for use in pagination. */
cursor: Scalars['String']
/** The item at the end of PageEdge. */
node: Page
}

export type GetAllPagesQuery = { __typename?: 'QueryRoot' } & {
  pages: { __typename?: 'PageConnection' } & {
    edges: Array<
      { __typename?: 'PageEdge' } & {
        node: { __typename?: 'Page' } & Pick<Page, 'id' | 'title' | 'handle'>
      }
    >
  }
}

export type GetAllProductVendorsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  cursor?: Maybe<Scalars['String']>
}>

export type GetAllProductVendorsQuery = { __typename?: 'QueryRoot' } & {
  products: { __typename?: 'ProductConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'hasPreviousPage'
    >
    edges: Array<
      { __typename?: 'ProductEdge' } & Pick<ProductEdge, 'cursor'> & {
          node: { __typename?: 'Product' } & Pick<ShopifyProduct, 'vendor'>
        }
    >
  }
}

export type GetAllProductPathsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  cursor?: Maybe<Scalars['String']>
}>

export type GetAllProductPathsQuery = { __typename?: 'QueryRoot' } & {
  products: { __typename?: 'ProductConnection' } & {
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'hasNextPage' | 'hasPreviousPage'
    >
    edges: Array<
      { __typename?: 'ProductEdge' } & Pick<ProductEdge, 'cursor'> & {
          node: { __typename?: 'Product' } & Pick<ShopifyProduct, 'handle'>
        }
    >
  }
}

export type ProductConnectionFragment = { __typename?: 'ProductConnection' } & {
  pageInfo: { __typename?: 'PageInfo' } & Pick<
    PageInfo,
    'hasNextPage' | 'hasPreviousPage'
  >
  edges: Array<
    { __typename?: 'ProductEdge' } & {
      node: { __typename?: 'Product' } & Pick<
        ShopifyProduct,
        'id' | 'title' | 'vendor' | 'handle'
      > & {
          priceRange: { __typename?: 'ProductPriceRange' } & {
            minVariantPrice: { __typename?: 'MoneyV2' } & Pick<
              MoneyV2,
              'amount' | 'currencyCode'
            >
          }
          images: { __typename?: 'ImageConnection' } & {
            pageInfo: { __typename?: 'PageInfo' } & Pick<
              PageInfo,
              'hasNextPage' | 'hasPreviousPage'
            >
            edges: Array<
              { __typename?: 'ImageEdge' } & {
                node: { __typename?: 'Image' } & Pick<
                  Image,
                  'originalSrc' | 'altText' | 'width' | 'height'
                >
              }
            >
          }
        }
    }
  >
}



export type GetAllProductsQuery = { __typename?: 'QueryRoot' } & {
  products: { __typename?: 'ProductConnection' } & ProductConnectionFragment
}











