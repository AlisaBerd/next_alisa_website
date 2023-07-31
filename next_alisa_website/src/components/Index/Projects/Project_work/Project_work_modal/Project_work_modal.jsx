import React from "react";
import project_work_modal from './Project_work_modal.module.css'
import {useDispatch, useSelector} from "react-redux";

const Project_work_modal = ({active, setActive}) => {

  const img = useSelector(state => state.img.img)

  return(
    <div className={active ? project_work_modal.project_work_modal_active : project_work_modal.project_work_modal} onClick={() => setActive(false)}>
      <div className={project_work_modal.project_work_modal_content} onClick={e => e.stopPropagation()}>
        <img src={img}/>
      </div>
    </div>
  )
}

export default Project_work_modal
