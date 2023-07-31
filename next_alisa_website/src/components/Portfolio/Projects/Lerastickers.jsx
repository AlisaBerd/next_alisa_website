import React, {useEffect} from "react";
import project_case from "./Project_case.module.css"
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
const Lerastickers = () => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/lera_stickers')
  //   }
  // },[]);

  return(
    <div className={project_case.project_case} >
      <Image className={project_case.project_img} src='/images/case6.jpg'  width={1500} height={6500}/>
    </div>
  )
}

export default Lerastickers
