import React, {useEffect, useState} from 'react'
import landingSale_mobile from "./LandingSale_mobile.module.css";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
import Official_modal_mobil from "@/components/Index/official/official_modal/Official_modal_mobil";
import {motion} from "framer-motion";
import landingSale from "@/components/Landings/LandingSale/LandingSale.module.css";
import {json_sale} from "@/components/Landings/LandingSale/LandingSale_json";

const LandingSale_mobile = (props) =>{
  const [modalActive, setModalActive] = useState(false)
  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/landing_sale')
  //   }
  // },[]);

  return(
    <div className={landingSale_mobile.landingSale}>
      <div>
        <Image src='/images/Group 3.png' width={300} height={300}/>
      </div>
      <h2>Суперпредложение</h2>
      <h1>Лендинг + рекламный креатив = 200€</h1>
      <button className={landingSale_mobile.landing_sale} onClick={() => setModalActive(true)}>Оставить заявку</button>
      <Official_modal_mobil active={modalActive} setActive={setModalActive}/>

      <motion.div  initial={{ x: -100, opacity: 0 }} className={landingSale_mobile.bloc}
                   whileInView={{ x: 0, opacity: 1 }}>
        <h1>Какие сайты делаю еще?</h1>

          <div>
            <Image src='/images/sale1.jpg' width={250} height={250}/>
          </div>
          <div className={landingSale_mobile.texts}>
            <p>{json_sale[0].service}</p>
            <span>{json_sale[0].text}</span>
          </div>

        <div>
          <Image src='/images/sale2.jpg' width={250} height={250}/>
        </div>
        <div className={landingSale_mobile.texts}>
          <p>{json_sale[1].service}</p>
          <span>{json_sale[1].text}</span>
        </div>

        <div>
          <Image src='/images/sale3.jpg'  width={250} height={250}/>
        </div>
        <div className={landingSale_mobile.texts}>
          <p>{json_sale[2].service}</p>
          <span>{json_sale[2].text}</span>
        </div>
      </motion.div>



      {/*</div>*/}

    </div>
  )
}

export default LandingSale_mobile
