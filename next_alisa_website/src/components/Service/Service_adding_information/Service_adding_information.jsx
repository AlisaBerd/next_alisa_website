import React from "react";
import service_adding_information from './Service_adding_information.module.css'



export default function Service_adding_information (props){
  return (
     <li className={service_adding_information.service_adding_information}>{props.service}</li>
  )
}
