import project_case_mobil from "./Project_mobil_case.module.css"
import {projectData} from "../Project_work/Project_work_json";

const Mastersofpankes_mobil = () => {

  return(
    <div className={project_case_mobil.project_case} >
      <img className={project_case_mobil.project_img} src={(projectData[2].case)}/>
    </div>
  )
}

export default Mastersofpankes_mobil
