import React from "react";
import project_mobile from "./ProjectMobile.module.css";
import Project_work_mobile from "./Project_work/Project_workMobile";
import Project_button_mobil from "./Project_button/Project_buttonMobil";
import {motion} from 'framer-motion'
const Project_mobile = (props) =>{
  return(
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={project_mobile.project_container}>
      <div className={project_mobile.project}>
        <h1>Мои проекты </h1>
        <Project_work_mobile />
        <Project_button_mobil />
      </div>
    </motion.div>
  )
}

export default Project_mobile
