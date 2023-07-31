import Head from 'next/head'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import OppinionMobile from "@/components/Oppinion/OppinionMobile";
import Oppinion from "@/components/Oppinion/Oppinion";
import {Inter} from "next/font/google";
import {GLOBAL_SITE_TYPE} from "@/config";

export default function OppinionPage() {
  return (
    <>
      <Head>
        <title>Отзывы</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <OppinionMobile/> : <Oppinion/>}
      </main>
    </>
  )
}
