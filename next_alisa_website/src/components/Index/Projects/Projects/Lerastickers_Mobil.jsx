import {projectData} from "../Project_work/Project_work_json";
import project_case_mobil from "./Project_mobil_case.module.css"
const Lerastickers_mobil = () => {

  return(
    <div className={project_case_mobil.project_case} >
      <img className={project_case_mobil.project_img} src={(projectData[5].case)}/>
    </div>
  )
}

export default Lerastickers_mobil
