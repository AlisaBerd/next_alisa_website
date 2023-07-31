import React, {useEffect} from "react";
//import {projectData} from "../Project_work/Project_work_json";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const Bootssite = () => {
  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/boots')
  //   }
  // },[]);
  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case5.png' width={1200} height={2000} />
    </div>
  )
}

export default Bootssite
