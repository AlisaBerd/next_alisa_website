import React from "react";
import './Doing.module.css'
import {DoingData} from "./DoingData"

import Bold from "./Doing_bold/Doing_bold";
import Doing_tempate from "./doing_template/Doing_tempate";
import Doing_button from "./Doing_button/Doing_button";

import css_doing from "./Doing.module.css"

const Doing = () => {
  let vDataTextInfo = DoingData.map( element => <Doing_tempate head={element.head} text={element.text} img={element.img} />);
  return(
    <>
      <Bold />
      <div className={css_doing.main_container}>
        <div className={css_doing.doing_container}>
          <div  className={css_doing.doing_left}>
            { vDataTextInfo[0] }
          </div>
          <div className={css_doing.doing_mid}>
            {vDataTextInfo[1]}
          </div>
          <div className={css_doing.doing_right}>
            {vDataTextInfo[2]}
          </div>
        </div>
      </div>

      <Doing_button />
    </>
  )
}

export default  Doing

