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

            <div className= 'flex my-3' >                
                <nav className= 'flex justify-between mx-auto w-10/12 border-2 ' >            

                    {/*   Navbar -- Icon    */ }
                    <div className=' relative w-[8rem]  p-6 '>
                        {mainIcon && <Image src={`https:${mainIcon}` } alt="Tadeo Logo" layout='fill' />}
                    </div>

                    {/*   Navbar -- Main Menu    */ }
                    <List style='w-full  justify-end text-primary-400  mr-16 sm:hidden lg:flex'>   
                        {menuItems.filter((a)=> {return a.fields.position === 'Left'}).map((e,i) => (
                        <ListItem style='p-4 hover:text-accent hover:text-xl hover:p-0'  key={`https:${e.fields.name}`}  >                        
                            <Link href = {e.fields.link}><a  className={style.label}> {e.fields.name} </a></Link>                        
                        </ListItem>
                        ))}
                    </List>                        
                  
                    <button type="button" className="focus:outline-none text-white bg-accent hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                
                </nav>
            </div>



 </>


  )
}

export default Menu
