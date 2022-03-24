import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import cn from 'classnames'


interface Props {
 
  'style': string
}

import React from 'react'

const List:FC<Props> = ({style,children}) => {
  
  
  return (
    <ul className={style}  >
        {children}
    </ul>
  )
}

export default List