import React from "react";
import css_class from './Doing.button.module.css';
import {motion} from 'framer-motion'
import Link from "next/link";

export default function Doing_button () {
  return(
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} className={ css_class.doing_it_button}>
        <button className={css_class.doing_button}><Link href="/service">Посмотреть цены</Link></button>
      </motion.div>
  )
}

