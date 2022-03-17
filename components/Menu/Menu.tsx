import React, { Children, FunctionComponent } from 'react'
import style from './Menu.module.css'
const Menu:FunctionComponent = (props) => {
  return (
    <nav >
        <ul  className={style.root}>
            {props.children}
        </ul>
    </nav>
  )
}

export default Menu