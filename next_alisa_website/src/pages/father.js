import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Father_mobil from "@/components/Portfolio/Projects/Father_mobil";
import Father from "@/components/Portfolio/Projects/Father";
import {GLOBAL_SITE_TYPE} from "@/config";

export default function FatherPage() {
  return (
    <>
      <Head>
        <title>дизайн открыток про папы</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="images/favicon.svg" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <Father_mobil/> : <Father/>}
      </main>
    </>
  )
}
