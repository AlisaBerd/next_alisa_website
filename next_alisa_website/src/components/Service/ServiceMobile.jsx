import React, {useEffect} from "react";
import service_modile from './ServiceMobile.module.css'
import Service_head from "./Service_head/Service_head";
import Service_adding_information from "./Service_adding_information/Service_adding_information";
import Service_collab from "./Service_collab/Service_collab";
import {service_add} from "./Service_adding_information/ServiceAdd_json";
import Service_collab_mobile from "./Service_collab/Service_collab_mobile";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

export default function ServiceMobile(props){
  let array_add = service_add.map( element => <Service_adding_information service={element.service} key={element.service}/>)

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/service')
  //   }
  // },[]);

  return (
    <div className={service_modile.service_modile}>
      <Service_head />
      <Service_collab_mobile/>
      <div className={service_modile.service_adding_information}>
        <h1>Дополнительные услуги</h1>
        <ul>
          {array_add}
        </ul>
      </div>
      { /* <Service_adding_information/>*/}
    </div>
  )
}
