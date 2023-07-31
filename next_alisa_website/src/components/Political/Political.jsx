import React, {useEffect} from "react";
import Political_blocks from "./Political_blocks/Political_blocks";
import political from'./Political.module.css';
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";

const Political = (props) => {

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/political')
  //   }
  // },[]);

  return (
      <div className={political.political}>
        <Political_blocks />
      </div>
  );
}

export default Political


