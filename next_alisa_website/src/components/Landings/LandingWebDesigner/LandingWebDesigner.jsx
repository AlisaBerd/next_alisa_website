import React, {useEffect, useState} from "react";
import landing_official from "./LandingWebDesigner.module.css";
import {Desingner_JSON} from "./LandingWebDesignerJSON";
import Landing_benefits from "./Landing_benefits";
import {Design_block} from "./Design_block";
import {Tarifs} from "./Design_tarifs";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
import Official_modal from "@/components/Index/official/official_modal/Official_modal";



export default function LandingWebDesigner (props){
  const [modalActive, setModalActive] = useState(false)
   let headline_arr = Design_block.map(element => <Landing_benefits text={element.text} img={element.img} />);
  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/designer')
  //   }
  // },[]);
  return (
    <div>
      {/*<div className={landing_official.landing_block}>*/}
      <div style={{
        //margin: '0 auto',
        //backgroundRepeat: 'no-repeat',
        // backgroundSize: '100% auto',
        width: '100vw',
        height: '52.0833vw',
        color: '#fff',
        backgroundImage: `url("images/start_landing.png")`
      }}>
        <p className={landing_official.landing_par}>Создайте уникальный фирменный стиль для вашего бизнеса</p>
        <h1 className={landing_official.landing_headliner}>{Desingner_JSON[0].headliner}</h1>
        <div className={landing_official.button_block}>
          <button className={landing_official.landing_button} onClick={() => setModalActive(true)}>Сделать заказ</button>
          <Official_modal active={modalActive} setActive={setModalActive}/>
        </div>
      </div>

      <div className={landing_official.landing_second}>
        {/*<img src='/images/forlanding.png'/>*/}
        <p >Каждый бизнес уникален, и вы заслуживаете уникального бренда, который выделяет вас из толпы. Я помогу вам создать уникальный фирменный стиль, который будет соответствовать вашему бизнесу и ваших клиентов.</p>
      </div>


      <div className={landing_official.landing_tariffs_grand}>
        <h1>{Desingner_JSON[1].headliner}</h1>
          <div className={landing_official.landing_tariffs}>

            <div className={landing_official.landing_tarifo}>
            <h2>{Tarifs[0].name}</h2>
              <ul>
                {Tarifs[0].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
              </ul>
            </div>

            <div className={landing_official.landing_tarifo}>
              <h2>{Tarifs[1].name}</h2>
              <ul>
                {Tarifs[1].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
              </ul>
            </div>

            <div className={landing_official.landing_tarifo}>
              <h2>{Tarifs[2].name}</h2>
              <ul>
                {Tarifs[2].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
              </ul>
            </div>

          </div>
      </div>

      <div className={landing_official.landing_benifits_grand}>
        <h1>{Desingner_JSON[2].headliner}</h1>
        <div className={landing_official.landing_benifits}>
        {headline_arr[0]}
        {headline_arr[1]}
        {headline_arr[2]}
      </div>
      </div>

    </div>
  )
}

