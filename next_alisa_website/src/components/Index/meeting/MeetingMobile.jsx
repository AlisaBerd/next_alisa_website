import React from "react";
import meet_mobile from'./MeetingMobile.module.css';
import Meeting_about_mobile from "./Meeting_about/Meeting_about_mobile";
import Meeting_photo_mobile from "./Meeting_photo/Meeting_photo_mobile";
import {motion} from 'framer-motion'
const MeetingMobile = () => {
  return(
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={meet_mobile .about_me}>

      <Meeting_photo_mobile />
      <Meeting_about_mobile />
    </motion.div>

  )
}

export default MeetingMobile
