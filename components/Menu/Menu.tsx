import React,{FC, useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menu,iconLibrary } from '../../framework/common/types/webpage'
import style from './Menu.module.css'
import {List,ListItem} from '@components/ui/List'
import cn from 'classnames'

interface Props {
    menu: menu[],
    iconLibrary: iconLibrary[]
  }

const Menu: FC<Props> = ({menu, iconLibrary}) => {
    
  const menuItems= menu
  const Icon =iconLibrary  
  const mainIcon= Icon.filter( (a)=>{return a.fields.name==='mainIcon'})[0].fields.icon.fields.file.url 
  const hamburgerMenu= Icon.filter( (a)=>{return a.fields.name==='hamburgerMenu'})[0].fields.icon.fields.file.url   
 const [btnOpen,setbtnOpen] = useState(false)
  const clickHandler = () => {
      setbtnOpen(!btnOpen)
      
  }



  return (
      <>

            <div className= {style.container} >  
                    <div className={style.left}>
                        {mainIcon && <Image src={`https:${mainIcon}` } alt="Tadeo Logo"  width={250} height={80}/>}
                    </div>               
                <nav className= {!btnOpen ? style.navbar_hidden : style.navbar} >     
                          
                    <div className={style.right}>
                        <li className={style.List}>   
                            {menuItems.filter((a,i)=> {return a.fields.position === 'Left'}).map((e,i) => (
                            <ul className={style.ListItem} key={i.toString()}  onClick={clickHandler}  >                        
                                <Link href = {e.fields.link}><a  className={style.label}> {e.fields.name} </a></Link>                        
                            </ul>
                            ))}
                            <button key={5} type="button" className={style.btn}>Red</button>    
                        </li>                        
                       
                    </div>
                </nav>
                    <div className={style.hamburger}>
                            <div className={btnOpen? ' hidden':' inline-block absolute z-50'} >
                                <span className="material-icons" id='menu' onClick={clickHandler}>&#xe5d2;</span>
                            </div>
                            <div className={!btnOpen? ' hidden':' inline-block absolute z-50'} >
                                <span className="material-icons" id='close' onClick={clickHandler}>&#xe5cd;</span>
                            </div>
                    </div>          
               
            </div>



 </>


  )
}

export default Menu
