import { FC } from "react";
import {Menu, MenuItem} from "@components/Menu";

import { Container , Box} from "@components/ui";
import Link from "next/link";
import Image from "next/image";
import {topBarProps} from "../../framework/common/types/webpage"
import style from "./Navbar.module.css"


interface Props {
  topItems: topBarProps[]
}

const Navbar: FC<Props> = ({topItems}) => {
  console.log(topItems[0].fields.icon.fields.file.url)

    return (

                  
        <div className= 'flex bg-slate-900 ' >
     
     <div className= 'flex text-white justify-between   mx-auto w-10/12' >
        <Menu>   
          {topItems.filter((a)=> {return a.fields.position === 'Left'}).map((e,i) => (
            
           <MenuItem key={i} image={`https:${e.fields.icon.fields.file.url}`} href={e.fields.link} isActive={true} > {e.fields.name} </MenuItem>
          ))}
        </Menu>
        
        <Menu>    
          {topItems.filter((a)=> {return a.fields.position === 'Right'}).map((e,i) => (
          <MenuItem key={i} image={`https:${e.fields.icon.fields.file.url}`} href={e.fields.link} isActive={true} > {e.fields.name} </MenuItem>    
        ))}
        </Menu>
        </div>
      </div>

    )

}
export default Navbar