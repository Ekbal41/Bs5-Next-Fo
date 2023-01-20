import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextScript } from 'next/document'
import Navbar from '@/componants/navbar'
import Header from '@/componants/header'
import Body from '@/componants/body'
import Footer from '@/componants/footer'
import Project from '@/componants/project'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head><title>Home page</title></Head>
     <Navbar />
     <Header/>
     <Project/>
     <Body/>
     <Footer/>
    </>
  )
}

