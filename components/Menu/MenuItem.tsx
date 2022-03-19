import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import style from './Menu.module.css'
import Link from 'next/link'

interface TopItemType {
    image?: string,
    href: string,
    isActive: boolean
}



const MenuItem:FunctionComponent<TopItemType>  = (props) => {
  return (
    <li className={style.menu} key={props.image}  >
        <div className={style.menu_item} >
          {props.image && <Image  src={props.image} alt="Vercel Logo" layout='fill' />}
        </div>
        <Link href = {props.href}>
            <a  className={style.label}> {props.children} </a>
        </Link>
    </li>
    
  )
}

export default MenuItem