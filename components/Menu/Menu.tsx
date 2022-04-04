import React,{FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menu,iconLibrary } from '../../framework/common/types/webpage'
import style from './Menu.module.css'
import {List,ListItem} from '@components/ui/List'


interface Props {
    menu: menu[],
    iconLibrary: iconLibrary[]
  }

const Menu: FC<Props> = ({menu, iconLibrary}) => {
    
  const menuItems= menu
  const Icon =iconLibrary  
  const mainIcon= Icon.filter( (a)=>{return a.fields.name==='mainIcon'})[0].fields.icon.fields.file.url 
  const hamburgerMenu= Icon.filter( (a)=>{return a.fields.name==='hamburgerMenu'})[0].fields.icon.fields.file.url   

  return (
      <>

            <div className= {style.container} >                
                <nav className= {style.navbar} >     
                    <div className={style.left}>
                        {mainIcon && <Image src={`https:${mainIcon}` } alt="Tadeo Logo"  width={250} height={80}/>}
                    </div>       
                    <div className={style.right}>
                        <li className={style.List}>   
                            {menuItems.filter((a,i)=> {return a.fields.position === 'Left'}).map((e,i) => (
                            <ul className={style.ListItem} key={i.toString()}  >                        
                                <Link href = {e.fields.link}><a  className={style.label}> {e.fields.name} </a></Link>                        
                            </ul>
                            ))}
                            <button key={5} type="button" className={style.btn}>Red</button>    
                        </li>                        
                        <div className={style.hamburger}>
                            <span className="material-icons">&#xe5d2;</span>
                        </div>
                    </div>

                </nav>
            </div>



 </>


  )
}

export default Menu
