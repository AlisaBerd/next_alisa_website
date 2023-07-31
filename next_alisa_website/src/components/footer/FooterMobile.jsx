import React, {useEffect} from "react";
import footer_mobile from "./FooterMobile.module.css"
import FooterMobile_sites from "./FooterMobile_sites/FooterMobile_sites";
import Footer_link from "./Footer_links/Footer_links";
import Footer_contact from "./Footer_contact/Footer_contact";
import Footer_info from "./Footer_info/Footer_info";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL, MOBILE_URL} from "@/config";

export default  function FooterMobile(){
  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(MOBILE_URL)
  //   }
  // },[]);

  return(
    <>
      <div className={footer_mobile.footer_mobile}>
        <FooterMobile_sites />
        <Footer_link />
        <Footer_contact />
         <Footer_info />
      </div>
    </>
  )
}
