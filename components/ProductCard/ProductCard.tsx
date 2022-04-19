import {Product} from '../../framework/common/types/product'
import React,{FC, useEffect, useState} from 'react'
import Image from 'next/image'

interface Props {
    products: Product[],
    
  }


    


const ProductCard: FC<Props> = ({products }) => {
    
    console.log(products)
  return (
    <div className= ' grid grid-cols-1 md:grid-cols-3 gap-10 w-8/12 mx-auto'>
        { products.map((product) => {
            const {images,options} = product
            console.log(images)
            const dollars = new Intl.NumberFormat('en-US',{currency:'USD',style:'currency'})

            return (
                <>
              <div className=" shadow-md shadow-accent rounded-xl overflow-hidden transition-all mb-4 ">
                <div className=' relative w-full h-48'>
                    <Image src={images[0].url} alt= {product.name} layout='fill'/>
                </div>

                <div className=" pl-2 pr-2 pb-20 grid grid-cols-1  ">
                  <div className=" my-2  px-2 text-lg w-min text-primary-400 rounded-full font-semibold bg-primary-200 ">
                    Gift
                  </div>
                  <div className="py-2 text-lg text-primary-400 border-b-2 border-accent border-solid">
                    <p className="">{product.name}</p>
                  </div>
                  <div className="py-2 leading-5 w-full">
                    <p className="">{product.description}</p>
                  </div>
                  <div className="p-4 py-2 leading-5 w-full flex justify-center text-xl text-accent bg-accent-100 rounded-tl-lg ">
                    <p className="">{` ${product.price.currencyCode}  ${dollars.format(product.price.value)} ` }</p>
                  </div>
                </div>
              </div>

                
                </>
            )

         })}
    </div>
  )

}

export default ProductCard

