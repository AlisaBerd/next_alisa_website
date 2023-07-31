import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import LandingWebDeveloper_mobile from "@/components/Landings/LandingWebDeveloper/LandingWebDeveloper_mobil";
import LandingWebDeveloper from "@/components/Landings/LandingWebDeveloper/LandingWebDeveloper";
import {GLOBAL_SITE_TYPE} from "@/config";
export default function LandingDevelopPage() {
  return (
    <>
      <Head>
        <title>Услуги разработчика</title>
        <meta name="description" content="Разработка сайтов и фирменного стиля,сайты,фирменный стиль,заказать сайт,
        сайты дёшево,сайты под ключ,корпоративный сайт «под ключ»,разработка корпоративного образа бренда" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main>
        {GLOBAL_SITE_TYPE=='mobile' ? <LandingWebDeveloper_mobile/> : <LandingWebDeveloper/>}
      </main>
    </>
  )
}
