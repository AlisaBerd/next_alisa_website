import React from "react";
import meet from'./Meeting.module.css';
import Meeting_photo from "./Meeting_photo/Meeting_photo";
import Meeting_about from "./Meeting_about/Meeting_about";

const Meeting = () => {
  return(
    <div className={meet.about_me}>
        <Meeting_photo/>
        <Meeting_about />
    </div>

  )
}

export default Meeting
