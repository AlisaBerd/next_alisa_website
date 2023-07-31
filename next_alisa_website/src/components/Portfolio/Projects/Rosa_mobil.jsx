import project_case_mobil from "./Project_mobil_case.module.css"
import Image from "next/image";
import React, {useEffect} from "react";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

const Rosa_mobil = () => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/rosa')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <Image className={project_case_mobil.project_img}  src='/images/case10.png' width={375} height={400}/>
    </div>
  )
}

export default Rosa_mobil
