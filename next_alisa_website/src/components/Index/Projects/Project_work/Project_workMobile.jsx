import React, {useState} from "react";
import project_work_mobile from "./Project_workMobile.module.css";
import {projectData} from "./Project_work_json"
import Project_work_modal from "./Project_work_modal/Project_work_modal";
import Link from "next/link";
import Image from "next/image";

const Project_work_mobile = (props) =>{
  const [modalActive, setModalActive] = useState(false)
  return(
    <div className={project_work_mobile.project_work_container}>
      <Link href='/irenagroup'><Image className={project_work_mobile.project} src={projectData[0].project} width={projectData[0].width} height={projectData[0].height}/></Link>
      <Link href='/struchkoff'><Image  className={project_work_mobile.project} src={projectData[1].project} width={projectData[1].width} height={projectData[1].height} /></Link>
      <Link href='/mastersofpankes'><Image  className={project_work_mobile.project} src={projectData[2].project} width={projectData[2].width} height={projectData[2].height} /></Link>
      <Link href='/wedding'><Image  className={project_work_mobile.project} src={projectData[3].project} width={projectData[3].width} height={projectData[3].height} /></Link>
      <Link href='/boots'><Image  className={project_work_mobile.project} src={projectData[4].project} width={projectData[4].width} height={projectData[4].height} /></Link>
      <Link href='/Lera_stickers'><Image  className={project_work_mobile.project} src={projectData[5].project} width={projectData[5].width} height={projectData[5].height} /></Link>
      <Project_work_modal active={modalActive} setActive={setModalActive}></Project_work_modal>
    </div>
  )
}

export default Project_work_mobile
