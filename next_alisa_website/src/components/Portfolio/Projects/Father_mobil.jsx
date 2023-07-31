import project_case_mobil from "./Project_mobil_case.module.css"
import {portfolioJson} from "../PortfolioJson";
import Image from "next/image";
import {useEffect} from "react";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";


const Father_mobil = () => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/father')
  //   }
  // },[]);

  return(
    <div className={project_case_mobil.project_case} >
      <Image className={project_case_mobil.project_img} src='/images/case8.png' width={375} height={1100}/>
    </div>
  )
}

export default Father_mobil
