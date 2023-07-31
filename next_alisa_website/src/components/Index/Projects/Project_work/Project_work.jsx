import React, {useState} from "react";
import project_work from "./Project_work.module.css";
import {projectData} from "./Project_work_json"
import Project_work_modal from "./Project_work_modal/Project_work_modal";
import {useDispatch} from "react-redux";
import {motion} from 'framer-motion'
import Link from "next/link";
import Image from "next/image";

const Project_work = (props) =>{
  const [modalActive, setModalActive] = useState(false)

  const dispatch = useDispatch()
  function openModal(value){
    dispatch({type:"CHANGE_IMAGE", payload: value})
    setModalActive(true)
  }
  return(
    <motion.div initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={project_work.project_work_container}>
      <Link href='/irenagroup'><Image className={project_work.project} src={projectData[0].project} width={projectData[0].width} height={projectData[0].height} alt=""/></Link >
      <Link href='/struchkoff'><Image  className={project_work.project} src={projectData[1].project} width={projectData[1].width} height={projectData[1].height}  alt=""/></Link>
      <Link href='/mastersofpankes'><Image  className={project_work.project} src={projectData[2].project} width={projectData[2].width} height={projectData[2].height}  alt=""/></Link>
      <Link href='/wedding'><Image  className={project_work.project} src={projectData[3].project} width={projectData[3].width} height={projectData[3].height}  alt=""/></Link>
      <Link href='/boots'><Image  className={project_work.project} src={projectData[4].project} width={projectData[4].width} height={projectData[4].height}  alt=""/></Link>
      <Link href='/Lera_stickers'><Image  className={project_work.project} src={projectData[5].project} width={projectData[5].width} height={projectData[5].height}  alt=""/></Link>
      <Project_work_modal active={modalActive} setActive={setModalActive}></Project_work_modal>
    </motion.div>
  )
}

export default Project_work
