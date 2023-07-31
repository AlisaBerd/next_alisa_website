import React, {useEffect} from "react";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const Struchkoff = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/struchkoff')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case2.png' width={1500} height={5000}/>
    </div>
  )
}

export default Struchkoff
