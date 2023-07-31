import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import WeddingNataandVitaliy_mobil from "@/components/Portfolio/Projects/WeddingNataandVitaliy_mobil";
import WeddingNataandVitaliy from "@/components/Portfolio/Projects/WeddingNataandVitaliy";
import {Inter} from "next/font/google";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function WebPage() {
  return (
    <>
      <Head>
        <title>дизайн пришлашений на свадьбу</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <WeddingNataandVitaliy_mobil/> : <WeddingNataandVitaliy/>}
      </main>
    </>
  )
}
