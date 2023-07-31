import React from 'react';
import button from'./Footer_button.module.css';
import Footer_button_logo from "./Footer_buttom_logo/Footer_buttom_logo";
import Footer_button_text from "./Footer_buttom_text/Footer_buttom_text";

const Footer_button = (props) => {
  return (
      <div className={button.bottom}>
        <Footer_button_logo />
        <Footer_button_text />
      </div>
  )
}

export default Footer_button
