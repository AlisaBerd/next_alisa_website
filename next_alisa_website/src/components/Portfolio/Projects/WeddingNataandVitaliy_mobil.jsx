import project_case_mobil from "./Project_mobil_case.module.css"
import Image from "next/image";
import React, {useEffect} from "react";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
const WeddingNataandVitaliy_mobil = () => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/wedding')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <Image className={project_case_mobil.project_img} src='/images/case4.png' width={375} height={1100}/>
    </div>
  )
}

export default WeddingNataandVitaliy_mobil
