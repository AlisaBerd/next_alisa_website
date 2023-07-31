import React, {useEffect} from "react";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const Mastersofpankes = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/mastersofpankes')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case3.png' width={1500} height={12500}/>
    </div>
  )
}

export default Mastersofpankes
