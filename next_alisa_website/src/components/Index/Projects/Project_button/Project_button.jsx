import React from "react";
import button from './Project_button.module.css';
import css_class from "../../doing/Doing_button/Doing.button.module.css";
import {motion} from 'framer-motion'
import Link from "next/link";

const Project_button = (props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }} className={button.project_it_button}>
      <button className={button.button_project}><Link href="/portfolio">Больше работ</Link></button>
    </motion.div>
  );
}

export default Project_button
