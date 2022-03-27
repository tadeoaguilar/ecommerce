
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../components/Menu/Menu.module.css'


import {createClient} from 'contentful'
import { homeProps } from '../framework/common/types/webpage'
import Topbar from '../components/TopBar/Topbar'
import Menu from '@components/Menu'



const Home: NextPage<homeProps> = ({topBar,menu,iconLibrary}) => {

  topBar.sort( (a,b) => {
    return a.fields.id - b.fields.id })
  menu.sort( (a,b) => {
    return a.fields.id- b.fields.id
  }

  )
  
  return (
   <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
          
          <Topbar topItems={topBar} /> 
          
          <Menu menu={menu} iconLibrary={iconLibrary} />
          
         
          
          
      </main>

      <footer >
        
      </footer>
    </>
  )
}


export async function getStaticProps() {
//  export async function getServerSideProps() {
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
  })
  console.log(`Token: ${process.env.CONTENTFUL_ACCESS_TOKEN}`)
  const topBar = await client.getEntries({
    'fields.visible': 'true',
    content_type: 'topBar',
  })
  const menu = await client.getEntries({
    'fields.visible': 'true',
    content_type: 'menu',
  })
  const iconLibrary = await client.getEntries({
    
    content_type: 'iconLibrary',
  })


  return {
    props:{
      topBar: topBar.items,
      menu: menu.items,
      iconLibrary: iconLibrary.items,
      
    }
  }
}


export default Home
