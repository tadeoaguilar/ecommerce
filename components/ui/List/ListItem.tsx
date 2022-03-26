import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import cn from 'classnames'


interface Props {  
  'style': string,
  'key': string
}

import React from 'react'

const ListItem:FC<Props> = ({style,key,children}) => {
  
  
  return (
    <li className={style} key ={key}  >
        {children}
    </li>
  )
}

export default ListItem