import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Rosa_mobil from "@/components/Portfolio/Projects/Rosa_mobil";
import Rosa from "@/components/Portfolio/Projects/Rosa";
import {GLOBAL_SITE_TYPE} from "@/config";

export default function RosaPage() {
  return (
    <>
      <Head>
        <title>Роза</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="images/favicon.svg" href="api#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <Rosa_mobil/> : <Rosa/>}
      </main>
    </>
  )
}
