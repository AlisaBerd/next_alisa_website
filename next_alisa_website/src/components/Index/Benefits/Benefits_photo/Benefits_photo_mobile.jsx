import React from 'react'
import benefits_photo_mobile from "./Benefits_photo.module.css";
import Image from "next/image";
import benefits_photo from "@/components/Index/Benefits/Benefits_photo/Benefits_photo.module.css";

const Benefits_photo_mobile = (props) => {
  return (
    <Image className={benefits_photo.benefit} src={"/images/table.jpg"} width={250} height={250} />
  )
}

export default Benefits_photo_mobile
