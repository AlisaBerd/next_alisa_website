import React from 'react';
import doing_template_mobile from './Doing_tempate_mobile.module.css';

const Doing_tempate_mobile = (props) => {

  return(
    <div className={doing_template_mobile.doing_template}>
      <h5>{props.head}</h5>
      <p>{props.text}</p>
      <img src={props.img} alt="" />
    </div>
  )
}

export default  Doing_tempate_mobile
