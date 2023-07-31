import React from "react";
import footermobile_sites from "./FooterMobile_sites.module.css"
import Link from "next/link";
import Image from "next/image";


const FooterMobile_sites = () => {
  return(
      <div className={footermobile_sites.footermobile_sites}>
        <h2>Социальные сети</h2>
        <ul>
          <li><Link href="https://t.me/alice_berd"><Image src={"/images/telegram.svg"} width={27} height={27}/></Link></li>
          <li><Link href="https://wa.me/79632497436?text=Здравствуйте,%20Алиса%20мне%20нужен%20"><Image src={"/images/whatssap.svg"} width={27} height={27} alt="" /></Link></li>
          <li><Link href="https://vk.com/club211258039"><Image  src={"/images/vk.svg"} alt="" width={27} height={27} /></Link></li>
          <li><Link href="https://www.behance.net/alisaf0x"><Image  src={"/images/behance.svg"} alt="" width={27} height={27} /></Link></li>
          {/* <li><Link href="https://t.me/alice_berd"><Image src={"/images/whatssap.svg"} width={27} height={27} alt="" /></Link></li>
          <li><Link href="https://wa.me/79632497436?text=Здравствуйте,%20Алиса%20мне%20нужен%20"><Image  src={"/images/telegram.svg"} width={27} height={27} alt="" /></Link></li>
          <li><Link href="https://vk.com/club211258039"><Image  src={"/images/vk.svg"} alt="" width={27} height={27} /></Link></li>
          <li><Link href="https://www.behance.net/alisaf0x"><Image  src={"/images/behance.svg"} alt="" width={27} height={27} /></Link></li> */}
        </ul>
      </div>
  )
}

export default FooterMobile_sites

