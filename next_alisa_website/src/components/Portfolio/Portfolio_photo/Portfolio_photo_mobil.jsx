import React, {useState} from "react";
import portfolio_photo_mobil from './Portfolio_photo_mobil.module.css';
import Link from "next/link";
import Image from "next/image";

const Portfolio_photo_mobil = (props) => {
  return (
    <div className={portfolio_photo_mobil.portfolio_photo}>
      <Link href={props.link}><Image src={props.img} width={259} height={247.81}/></Link>
    </div>
  )
}

export default Portfolio_photo_mobil
