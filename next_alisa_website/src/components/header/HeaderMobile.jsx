import React, {useState} from "react";
import headermobile from './HeaderMobile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import Header_left_mobile from "./Header_left/Header_left_mobile";
import HeaderModal from "./HeaderModal/HeaderModal";

export default function HeaderMobile(){
  const [showMenu,setShowMenu] = useState(false)
  let flag = "false"
  if (showMenu) {flag = "true"}
  return(
    <div>
      <div className={headermobile.header_mobile}>
        <div className={headermobile.header_left}>
          <Header_left_mobile/>
        </div>
          <div></div>
        <div className={headermobile.header_right}>
          {<FontAwesomeIcon className={headermobile.icon} size="3x" icon={faBars} onClick={() => setShowMenu(!showMenu)}/>}
        </div>
      </div>
      <HeaderModal showMenu={showMenu} setShowMenu={setShowMenu} />
  </div>
  )
}
