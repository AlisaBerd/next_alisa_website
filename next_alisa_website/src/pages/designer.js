import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import LandingWebDesigner from "@/components/Landings/LandingWebDesigner/LandingWebDesigner";
import LandingWebDesigner_mobile from "@/components/Landings/LandingWebDesigner/LandingWebDesigner_mobile";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function LandingDesPage() {
  return (
    <>
      <Head>
        <title>Услуги дизайнера</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile'  ? <LandingWebDesigner_mobile/> : <LandingWebDesigner/>}
      </main>
    </>
  )
}
