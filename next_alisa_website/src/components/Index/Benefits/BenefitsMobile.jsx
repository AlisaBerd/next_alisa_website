import React from 'react'
import benefits_mobile from "./BenrfitsMobile.module.css";
import Benefits_text_grand from "./Benefits_text_grand/Benefits_text_grand";
import Benefits_photo_mobile from "./Benefits_photo/Benefits_photo_mobile";
import {motion} from 'framer-motion'

const BenefitsMobile = (props) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} className={benefits_mobile.benefits_container}>
      <Benefits_text_grand />
      <Benefits_photo_mobile />
    </motion.div>
  )
}

export default BenefitsMobile
