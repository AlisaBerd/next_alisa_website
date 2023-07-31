import project_case from "./Project_case.module.css"
import React, {useEffect} from "react";
import {portfolioJson} from "../PortfolioJson";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const Father = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/father')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case8.png' width={1500} height={2500}/>
    </div>
  )
}

export default Father
