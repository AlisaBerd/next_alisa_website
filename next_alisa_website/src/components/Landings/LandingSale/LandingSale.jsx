import React, {useEffect, useState} from 'react'
import landingSale from "./LandingSale.module.css";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
import Official_modal from "@/components/Index/official/official_modal/Official_modal";
import {json_data} from "@/components/Service/Service_collab/Service_colab_json";
import {json_sale} from "@/components/Landings/LandingSale/LandingSale_json";
import {motion} from 'framer-motion'

const LandingSale = (props) =>{
  const [modalActive, setModalActive] = useState(false)
  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/landing_sale')
  //   }
  // },[]);

  return(
    <div className={landingSale.landingSale}>
      <div className={landingSale.oneString}>
        <div>
          <h2>Суперпредложение</h2>
          <h1>Лендинг + рекламный креатив = 200€</h1>
          <button className={landingSale.landing_sale} onClick={() => setModalActive(true)}>Оставить заявку</button>
          <Official_modal active={modalActive} setActive={setModalActive}/>
        </div>
        <div>
          <Image src='/images/Group 3.png' width={600} height={550}/>
        </div>
      </div>
        <motion.div  initial={{ x: -100, opacity: 0 }} className={landingSale.else}
          whileInView={{ x: 0, opacity: 1 }}>
          <h1>Какие сайты делаю еще?</h1>
          {/*<div className={landingSale.elseblock}>*/}
          <div className={landingSale.bloc}>
            <div>
              <Image src='/images/sale1.jpg' width={400} height={400}/>
            </div>
            <div className={landingSale.texts}>
              <p>{json_sale[0].service}</p>
              <span>{json_sale[0].text}</span>
            </div>
          </div>

          <motion.div  initial={{ x: -100, opacity: 0 }} className={landingSale.bloc}
           whileInView={{ x: 0, opacity: 1 }}>
            <div>
               <Image src='/images/sale2.jpg' width={400} height={400}/>
            </div>
            <div className={landingSale.texts}>
              <p>{json_sale[1].service}</p>
              <span>{json_sale[1].text}</span>
            </div>
          </motion.div >

          <motion.div className={landingSale.bloc}
            whileInView={{ x: 0, opacity: 1 }}>
            <div>
               <Image src='/images/sale3.jpg' width={400} height={400}/>
            </div>
            <div className={landingSale.texts}>
              <p>{json_sale[2].service}</p>
              <span>{json_sale[2].text}</span>
            </div>
          </motion.div>
          {/*</div>*/}
        </motion.div>
    </div>
  )
}

export default LandingSale
