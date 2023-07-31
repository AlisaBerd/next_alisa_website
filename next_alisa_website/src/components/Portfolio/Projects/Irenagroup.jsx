import React, {useEffect} from "react";
import {projectData} from "../PortfolioJson";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const Irenagroup = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/irenagroup')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
        <Image className={project_case.project_img} src='/images/case1.png' width={1400} height={4500} />
    </div>
  )
}

export default Irenagroup
