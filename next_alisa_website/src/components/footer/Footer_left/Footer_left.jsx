import React from 'react';
import left from './Footer_left.module.css';
import Image from "next/image";
import Link from "next/link";

const Footer_left = (props) => {
  return (
          <div className={left.footer_left}>
              <h2>Социальные сети</h2>
              <ul className={left.footer_list_left}>
                <li><Link href="https://t.me/alice_berd"><Image className="Wtatsap" src={"/images/whatssap.svg"} width={27} height={27} alt="" /></Link></li>
                <li><Link href="https://wa.me/79632497436?text=Здравствуйте,%20Алиса%20мне%20нужен%20"><Image className="Telegram" src={"/images/telegram.svg"} width={27} height={27} alt="" /></Link></li>
                <li><Link href="https://vk.com/club211258039"><Image className="VK" src={"/images/vk.svg"} alt="" width={27} height={27} /></Link></li>
                <li><Link href="https://www.behance.net/alisaf0x"><Image className="Behance" src={"/images/behance.svg"} alt="" width={27} height={27} /></Link></li>
              </ul>
          </div>
  )
}

export default Footer_left
