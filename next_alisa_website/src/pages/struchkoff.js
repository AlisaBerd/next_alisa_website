import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Struchkoff_mobil from "@/components/Portfolio/Projects/Struchkoff_mobil";
import Struchkoff from "@/components/Portfolio/Projects/Struchkoff";
import {GLOBAL_SITE_TYPE} from "@/config";

export default function StruchkoffPage() {
  return (
    <>
      <Head>
        <title>дизайн корма для грызунов Struchkoff</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="images/favicon.svg" href="api#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <Struchkoff_mobil/> : <Struchkoff/>}
      </main>
    </>
  )
}
