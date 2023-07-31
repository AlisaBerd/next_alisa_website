import React from "react";
import button_mobil from './Project_buttonMobil.module.css';
import Link from "next/link";


const Project_button_mobil = (props) => {
  return (
    <div className={button_mobil.project_it_button}>
      <button className={button_mobil.button_project}><Link href="/portfolio">Больше работ</Link></button>
    </div>
  );
}

export default Project_button_mobil
