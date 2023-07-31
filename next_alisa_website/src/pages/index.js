import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Index from "@/components/Index/Index";
import IndexMobile from "@/components/Index/IndexMobile";
import {GLOBAL_SITE_TYPE, MOBILE_URL, DESKTOP_URL} from "@/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Сайт дизайнера и разработчика Алисы Бердышевой</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="images/favicon.svg" href="#" />
      </Head>
      <main>
        {GLOBAL_SITE_TYPE=='mobile' ? <IndexMobile/> : <Index/>}
      </main>
    </>
  )
}
