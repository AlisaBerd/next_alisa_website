import React, {useState} from "react";
import portfolio_photo from './Portfolio_photo.module.css';
import Portfolio_photo_modal from "./Portfolio_photo_modal/Portfolio_photo_modal";
import {useDispatch} from "react-redux";
import {portfolioJson} from "../PortfolioJson";
import {motion} from 'framer-motion'
import Link from "next/link";
import Image from "next/image";

const Portfolio_photo = (props) => {
  return (
    <div className={portfolio_photo.portfolio_photo}>
    <Link href={props.link}><Image src={props.img} width={423.25} height={403}/></Link>
    </div>
  )
}

export default Portfolio_photo
