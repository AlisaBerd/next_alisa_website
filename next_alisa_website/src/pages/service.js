import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import ServiceMobile from "@/components/Service/ServiceMobile";
import Service from "@/components/Service/Service";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Мои услуги</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <ServiceMobile/> : <Service/>}
      </main>
    </>
  )
}
