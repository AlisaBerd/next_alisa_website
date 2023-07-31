import React, {useEffect} from "react";
import oppinion from'./Oppinion.module.css'
import Oppinion_head from './Oppinion_head/Oppinion_head'
import {oppinionNote} from "./Oppinion_note/OppinionNote";
import Oppinion_note from "./Oppinion_note/Oppinion_note";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const Oppinion = (props) => {
  let OppinionNote_array = oppinionNote.map(element => <Oppinion_note text={element.text} name={element.name} key={element.name}/>)

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/oppinion')
  //   }
  // },[]);

  return (
    <div className={oppinion.oppinion}>
      <Oppinion_head />
        <div className={oppinion.oppinion_border}>
        {OppinionNote_array}
        </div>
    </div>
  );
}

export default Oppinion
