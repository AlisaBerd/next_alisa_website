import React from "react";
import {DoingData} from "./DoingData"
import Doing_button from "./Doing_button/Doing_button";
import css_doing from "./DoingMobile.module.css"
import Doing_tempate_mobile from "./doing_template/Doing_tempate_mobile";
import Doing_bold_mobile from "./Doing_bold/Doing_bold_mobile";
import Doing_button_mobile from "./Doing_button/Doing_button_mobile";
import {motion} from 'framer-motion'
const DoingMobile = () => {
  let vDataTextInfo = DoingData.map( element => <Doing_tempate_mobile head={element.head} text={element.text} img={element.img} />);
  return(
    <>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }} className={css_doing.main_container}>
        <Doing_bold_mobile />
          <div>
            {vDataTextInfo[0]}
            {vDataTextInfo[1]}
            {vDataTextInfo[2]}
          </div>
        <Doing_button_mobile />
      </motion.div>
    </>
  )
}

export default DoingMobile
