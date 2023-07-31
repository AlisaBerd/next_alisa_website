import React from "react";
import doing_button_mobile from './Doing_button_mobile.module.css';
import Link from "next/link";


export default function Doing_button_mobile () {
  return(
    <div className={ doing_button_mobile.doing_it_button}>
      <button className={doing_button_mobile.doing_button}><Link href="/service">Посмотреть цены</Link></button>
    </div>
  )
}
