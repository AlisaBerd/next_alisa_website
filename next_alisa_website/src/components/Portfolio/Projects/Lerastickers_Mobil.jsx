import React, {useEffect} from "react";
import project_case_mobil from "./Project_mobil_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
const Lerastickers_mobil = () => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/lera_stickers')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <Image className={project_case_mobil.project_img} src='/images/case6.jpg' width={375} height={3500}/>
    </div>
  )
}

export default Lerastickers_mobil
