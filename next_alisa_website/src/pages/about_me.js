import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import styles from "@/styles/Home.module.css";
import About_me from "@/components/About_me/About_me";
import About_me_mobile from "@/components/About_me/About_me_block/About_me_photo/About_me_mobile";
import {GLOBAL_SITE_TYPE} from "@/config";
import AboutMobile from "@/components/About_me/AboutMobile";

export default function AboutMePage() {
  return (
    <>
      <Head>
        <title>Обо мне</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile'? <AboutMobile/> : <About_me/>}
      </main>
    </>
  )
}
