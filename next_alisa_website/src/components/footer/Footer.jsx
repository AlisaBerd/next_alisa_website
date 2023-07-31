import React from 'react';
import official from './Footer.module.css';
import Footer_left from "./Footer_left/Footer_left";
import Footer_Center from "./Footer_center/Footer_center";
import Footer_right from "./Footer_right/Footer_right";
import Footer_button from "./Footer_buttom/Footer_button";

const Footer = (props) => {

  return (
    <div className={official.footer}>
     <Footer_left />
     <Footer_Center />
     <Footer_right />
     <Footer_button />
    </div>
  )
}

export default Footer
