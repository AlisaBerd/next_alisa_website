import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import LandingSale_mobile from "@/components/Landings/LandingSale/LandingSale_mobile";
import LandingSale from "@/components/Landings/LandingSale/LandingSale";
import {GLOBAL_SITE_TYPE} from "@/config";

export default function SalePage() {
  return (
    <>
      <Head>
        <title>Ленлинг и креатив</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <LandingSale_mobile/> : <LandingSale/>}
      </main>
    </>
  )
}
