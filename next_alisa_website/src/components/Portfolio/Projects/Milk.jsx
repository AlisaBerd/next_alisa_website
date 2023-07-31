import project_case from "./Project_case.module.css"
import Image from "next/image";
import React, {useEffect} from "react";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const Milk = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/festivalofmilk')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case7.png' width={1500} height={2000}/>
    </div>
  )
}

export default Milk
