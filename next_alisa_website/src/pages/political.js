import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import PoliticalMobile from "@/components/Political/PoliticalMobile";
import Political from "@/components/Political/Political";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function PoliticalPage() {
  return (
    <>
      <Head>
        <title>Политика об обработки персональных данных</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <PoliticalMobile/> : <Political/>}
      </main>
    </>
  )
}
