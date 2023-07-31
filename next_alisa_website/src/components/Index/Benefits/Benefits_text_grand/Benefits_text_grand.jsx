import React from 'react'
import benefits_text_grand from "./Benefits_text_grand.module.css";
import Benefits_text from "./Benefits_text/Benefits_text";
import {head_line} from "./BenefitsJson";
import {motion} from 'framer-motion'

const Benefit_text_grand = (props) => {
  let vHeadLine = head_line.map( text1 => <Benefits_text head={text1.head} text={text1.text} />);
  return (
    <motion.div
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }} className={benefits_text_grand.benefits_text_grand}>
        <h1>Особенности работы со мной</h1>
       {vHeadLine [0]}
       {vHeadLine [1]}
       {vHeadLine [2]}
    </motion.div>
  )
}

export default Benefit_text_grand
