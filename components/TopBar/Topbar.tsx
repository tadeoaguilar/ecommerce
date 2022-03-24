import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {topBarProps} from "../../framework/common/types/webpage"
import style from './Topbar.module.css'
import cn from 'classnames'
import {List,ListItem} from '@components/ui/List'


interface Props {
  topItems: topBarProps[]
}

const Topbar: FC<Props> = ({topItems}) => {
  

    return (

                  
          <div className= {cn(style.container,'bg-primary-400')} >     
            <nav className= {style.nav_bar} >

              <List  style={style.container} >
                  {topItems.filter((a)=> {return a.fields.position === 'Left'}).map((e,i) => (
                      <ListItem style={style.list_left} key={e.fields.name}  >
                          <div className={style.img_container} >
                              <Image  src={`https:${e.fields.icon.fields.file.url}`} alt="Vercel Logo" layout='fill' />
                          </div>
                          <Link href = {e.fields.link}>
                            <a  className={style.label}> {e.fields.name} </a>
                          </Link>
                      </ListItem>

          ))}
              </List>
              <List style={style.container}>   
                  {topItems.filter((a)=> {return a.fields.position === 'Right'}).map((e,i) => (
                  <ListItem style={style.list_right} key={e.fields.name}  >
                    <div className={style.img_container} >
                      <Image  src={`https:${e.fields.icon.fields.file.url}`} alt="Vercel Logo" layout='fill' />
                    </div>
                    <Link href = {e.fields.link}>
                      <a  className= {style.label}> {e.fields.name} </a>
                    </Link>
                  </ListItem>
                  ))}
              </List>
             
            </nav>
          </div>





    )

}
export default Topbar