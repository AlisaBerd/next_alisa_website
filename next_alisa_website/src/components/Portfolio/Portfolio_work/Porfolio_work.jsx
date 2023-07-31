import React, {useState} from "react";
import project_work from "./Project_work.module.css";
import {NavLink} from "react-router-dom";

const Project_work = (props) =>{

  return(
    <div className={project_work.project_work_container}>
      <NavLink to={props.link}><img className={project_work.project} src={props.project} /></NavLink >
    </div>
  )
}

export default Project_work
