import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

interface TopItemType {
    image?: string,
    href: string,
    isActive: boolean
}



const MenuItem:FunctionComponent<TopItemType>  = (props) => {
  return (
    <li key={props.image} className={styles.topitem} >
        {props.image && <Image src={props.image} alt="Vercel Logo" width={16} height={16} />}
        
        <Link href = {props.href}>
            <a  > {props.children} </a>
        </Link>
    </li>
    
  )
}

export default MenuItem