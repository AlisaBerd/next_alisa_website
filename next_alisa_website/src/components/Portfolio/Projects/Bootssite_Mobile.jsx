import React, {useEffect} from "react";
//import {projectData} from "../Project_work/Project_work_json";
import project_case_mobil from "./Project_mobil_case.module.css"
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
const Bootssite_mobil = () => {
  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/boots')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <img className={project_case_mobil.project_img} src='/images/case5.png' width={375} height={800}/>
    </div>
  )
}

export default Bootssite_mobil
