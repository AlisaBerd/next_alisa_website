import React, {useEffect} from "react";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const WeddingNataandVitaliy = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/wedding')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case4.png' width={1500} height={3000} />
    </div>
  )
}

export default WeddingNataandVitaliy
