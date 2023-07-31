import React from "react";
import {projectData} from "../Project_work/Project_work_json";
import project_case from "./Project_case.module.css"
import Image from "next/image";
const Irenagroup = () => {

  return(
    <div className={project_case.project_case} >
        <Image className={project_case.project_img} href={(projectData[0].case)}/>
    </div>
  )
}

export default Irenagroup
