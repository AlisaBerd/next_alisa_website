import React from "react";
import project from "./Project.module.css";
import Project_work from "./Project_work/Project_work";
import Project_button from "./Project_button/Project_button";
import {motion} from 'framer-motion'
const Project = (props) =>{
  return(
    <div className={project.project_container}>
      <div className={project.project}>
        <motion.h1 initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}>Мои проекты </motion.h1>
        <Project_work />
        <Project_button />
      </div>
    </div>
  )
}

export default Project
