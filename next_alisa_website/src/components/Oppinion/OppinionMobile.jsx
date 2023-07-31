import React, {useEffect} from "react";
import oppinion_mobile from'./OppinionMobile.module.css'
import Oppinion_head from './Oppinion_head/Oppinion_head'
import {oppinionNote} from "./Oppinion_note/OppinionNote";
import Oppinion_note from "./Oppinion_note/Oppinion_note";
import Oppinion from "./Oppinion";
import Oppinion_note_mobile from "./Oppinion_note/Oppinion_note_mobile";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

const OppinionMobile = (props) => {
  let OppinionNote_array = oppinionNote.map(element => <Oppinion_note_mobile text={element.text} name={element.name}/>)

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/oppinion')
  //   }
  // },[]);

  return (
    <div className={oppinion_mobile.oppinion}>
      <Oppinion_head />
      <div className={oppinion_mobile.oppinion_border}>
        {OppinionNote_array}
      </div>
    </div>
  );
}

export default OppinionMobile
