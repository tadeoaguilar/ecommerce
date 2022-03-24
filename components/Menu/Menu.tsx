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

            <div className= 'flex bg-primary-100' >                
                <div className= 'flex justify-between mx-auto w-10/12 border-2 ' >                

                    {/*   Navbar -- Icon    */ }
                    <div className='my-2 relative w-[9rem] h-[2rem] p-6 '>
                        {mainIcon &&
                        <Image src={`https:${mainIcon}` } alt="Tadeo Logo" layout='fill' />}
                    </div>

                    {/*   Navbar -- Main Menu    */ }
                    <List style='w-full my-2 justify-end text-primary-400  mr-16 sm:hidden lg:flex'>   
                        {menuItems.filter((a)=> {return a.fields.position === 'Left'}).map((e,i) => (
                        
                        
                        <ListItem style='p-4 hover:text-accent hover:text-xl hover:p-0'  key={`https:${e.fields.name}`}  >
                        
                        <Link href = {e.fields.link}>
                            <a  className={style.label}> {e.fields.name} </a>
                        </Link>
                        </ListItem>

                        ))}
                    </List>
                    
                    <button className=' sm:in-line lg:hidden w-full flex justify-end my-auto'>
                        <Image src={`https:${hamburgerMenu}` } alt="Vercel Logo"  height={16} width={16} />
                    </button>
                    <button className=' bg-accent-100 hover:bg-accent text-accent hover:text-white  rounded-lg my-2 cursor-pointer w-44 text-sm hover:text-xl hover:pt-0 hover:pb-0 leading-5 pt-3 pb-3 text-center   sm:hidden lg:block'>
                        Button
                    </button>
                    
   
 <nav>
   
 </nav>
   </div>
 
 </div>



 </>


  )
}

export default Menu
