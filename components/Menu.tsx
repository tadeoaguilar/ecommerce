import React, { Children, FunctionComponent } from 'react'
import styles from '../styles/Home.module.scss'
const Menu:FunctionComponent = (props) => {
  return (
    <nav className={styles.topbar}>
        <ul  >
            {props.children}
        </ul>
    </nav>
  )
}

export default Menu