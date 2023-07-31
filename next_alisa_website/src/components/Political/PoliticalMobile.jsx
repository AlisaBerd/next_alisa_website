import React, {useEffect} from "react";
import Political_block_mobile from "./Political_blocks/Political_blocks_mobile";
import politicalMobil from './PoliticalMobil.module.css'
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";

const PoliticalMobil = (props) => {

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/political')
  //   }
  // },[]);

  return (
    <div className={politicalMobil.politicalMobil}>
      <Political_block_mobile />
    </div>
  );
}

export default PoliticalMobil
