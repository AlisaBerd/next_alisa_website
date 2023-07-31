import React, {useEffect} from "react";
import BenefitsMobile from "./Benefits/BenefitsMobile";
import DoingMobile from "./doing/DoingMobile";
import MeetingMobile from "./meeting/MeetingMobile";
import Oppinion_index_mobile from "./Oppinion_index/Oppinion_index_mobile";
import Technologies_mobile from "./Technologies/TechnologesMobile";
import Project_mobile from "./Projects/ProjectMobile";
import OfficialMobile from "./official/OfficialMobile";
export default  function IndexMobile(){
  return(
    <>
      <OfficialMobile/>
      <MeetingMobile/>
      <DoingMobile />
      <Project_mobile/>
      <BenefitsMobile/>
      <Technologies_mobile/>
      <Oppinion_index_mobile/>
    </>
  )
}
