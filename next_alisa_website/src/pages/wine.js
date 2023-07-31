import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import {Inter} from "next/font/google";
import Wine_mobil from "@/components/Portfolio/Projects/Wine_mobile";
import Wine from "@/components/Portfolio/Projects/Wine";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function WebPage() {
  return (
    <>
      <Head>
        <title>дизайн упаковски вина</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {GLOBAL_SITE_TYPE=='mobile' ? <Wine_mobil/> : <Wine/>}
      </main>
    </>
  )
}
