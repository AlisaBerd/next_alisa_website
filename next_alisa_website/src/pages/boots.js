import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Bootssite_mobil from "@/components/Portfolio/Projects/Bootssite_Mobile";
import Bootssite from "@/components/Portfolio/Projects/Bootssite";
import styles from "@/styles/Home.module.css";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function BootssitePage() {
   return (
    <>
      <Head>
        <title>дизайн магазина обуви</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <Bootssite_mobil/> : <Bootssite/>}
      </main>
    </>
  )
}
