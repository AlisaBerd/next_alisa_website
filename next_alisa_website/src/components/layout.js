import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
//import { isMobile } from 'react-device-detect';
import {GLOBAL_SITE_TYPE} from "@/config";
import HeaderMobile from "@/components/header/HeaderMobile";
import FooterMobile from "@/components/footer/FooterMobile";
import Redirect from "@/components/Redirect/Redirect";
import React from "react";
import RedirectMobile from "@/components/RedirectMobile/RedirectMobile";
const Layout = ({children}) => {
  return(
    <div>
      {GLOBAL_SITE_TYPE=='mobile' ? <RedirectMobile/> : <Redirect/> }
       {GLOBAL_SITE_TYPE=='mobile' ? <HeaderMobile/> : <Header/> }
        {children}
        {GLOBAL_SITE_TYPE=='mobile' ? <FooterMobile/> : <Footer/> }
    </div>
  )
}

export default Layout;
