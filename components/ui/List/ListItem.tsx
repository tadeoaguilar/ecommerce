import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import cn from 'classnames'


interface Props {  
  'style': string,
  'key': string
}

import React from 'react'

const List:FC<Props> = ({style,children,key}) => {
  
  
  return (
    <li className={style} key ={key}  >
        {children}
    </li>
  )
}

export default List