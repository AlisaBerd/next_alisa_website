import React from "react";
import {projectData} from "../Project_work/Project_work_json";
import project_case from "./Project_case.module.css"
const Mastersofpankes = () => {

  return(
    <div className={project_case.project_case} >
      <img className={project_case.project_img} src={(projectData[2].case)}/>
    </div>
  )
}

export default Mastersofpankes
