import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import {isMobile} from "react-device-detect";
import Mastersofpankes_mobil from "@/components/Portfolio/Projects/Mastersofpankes_Mobil";
import Mastersofpankes from "@/components/Portfolio/Projects/Mastersofpankes";

export default function MastersofpankesPage() {
  return (
    <>
      <Head>
        <title>дизайн блинной</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="images/favicon.svg" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {isMobile ? <Mastersofpankes_mobil/> : <Mastersofpankes/>}
      </main>
    </>
  )
}
