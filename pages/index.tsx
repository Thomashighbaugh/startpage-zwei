import Head from 'next/head';
import Menu from '../components/Menu';
import * as React from 'react'
import { motion } from "framer-motion"
import styled from '@emotion/styled'
import Time from '../components/time';
import Preferences from '../components/Preferences';
import {  Searchbar } from '@global/components/Search';
import { LinkContainer } from '@global/components/LinkContainer/LinkContainer';
const Main = styled.div<{ menuOpen: boolean }>`
  display: ${(props: { menuOpen: any }) => (props.menuOpen ? 'none' : 'block')};
`

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div className=" min-w-full justify-center align-middle justify-items-center content-center">
      <Head>
        <title>Startpage</title>
      </Head>

      <div className="min-h-screen flex flex-col  h-full place-content-stretch justify-center align-middle  bg-gray-900 bg-hero-morphing-diamonds overflow-hidden">
      <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      <Main menuOpen={menuOpen}>
<br/>
       <div className="inline-flex w-full  ">
       <Time />

   
          <LinkContainer />
          </div>
          <motion.div      whileHover={{ scale: 0.95 }}
    whileTap={{ scale: 0.90 }}   animate={{ 
      scale: [1, 0.95, 1],
    }} className="w-full h-48 bg-gray-900 text-gray-400 border-2 border-solid  border-gray-400 mt-12 pl-24 pr-24  rounded-2xl">

<Searchbar />

    </motion.div>
        </Main>
        
        <Preferences menuOpen={menuOpen} />
   </div> </div>
  )
}
