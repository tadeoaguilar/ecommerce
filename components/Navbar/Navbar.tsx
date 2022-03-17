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


    return (

                  
        <Box >
     
           
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
      </Box>

    )

}
export default Navbar