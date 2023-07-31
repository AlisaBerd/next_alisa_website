import project_case_mobil from "./Project_mobil_case.module.css"
import React, {useEffect} from "react";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
const Mastersofpankes_mobil = () => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/mastersofpankes')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <Image className={project_case_mobil.project_img} src='/images/case3.png' width={375} height={6500}/>
    </div>
  )
}

export default Mastersofpankes_mobil
