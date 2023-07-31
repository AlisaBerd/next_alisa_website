import React, {useEffect, useState} from "react";
import landing_dev from "./LandingWebDeveloper.module.css";
import {Developer_JSON} from "./LandingWebDeveloperJSON";
import {Tarifs_dev} from "./Develop_tarifs";
import {Design_block} from "../LandingWebDesigner/Design_block";
import Landing_benefits from "../LandingWebDesigner/Landing_benefits";
import {Develop_block} from "./Develop_block";
import Landing_it_benefits from "./Landing_it_benefits";
import landing_official from "../LandingWebDesigner/LandingWebDesigner.module.css";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
import Official_modal from "@/components/Index/official/official_modal/Official_modal";



export default function LandingWebDeveloper (props) {
  const [modalActive, setModalActive] = useState(false)
  let benefit = Develop_block.map(element => <Landing_it_benefits text={element.text} img={element.img} />);

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/developer')
  //   }
  // },[]);

  return (
    <div>

      {/*<div className={landing_official.landing_block}>*/}
      <div style={{
        margin: '0 auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        width: '100vw',
        height: '49.4792vw',
        color: '#fff',
        backgroundImage: `url("images/start_landing.png")`
      }}>
        <p className={landing_dev.landing_par}>Создайте эффективный сайт с нуля</p>
        <h1 className={landing_dev.landing_headliner}>{Developer_JSON[0].headliner}</h1>
        <div className={landing_dev.button_block}>
          <button className={landing_dev.landing_button} onClick={() => setModalActive(true)}>Сделать заказ</button>
          <Official_modal active={modalActive} setActive={setModalActive}/>
        </div>
      </div>

      <div className={landing_dev.landing_second}>
        {/*<img src='/images/forlanding.png'/>*/}
        <p>Ваш сайт - это лицо вашего бизнеса в интернете, и вы хотите, чтобы оно выглядело и работало идеально.  Я помогу вам создать эффективный сайт с нуля, начиная от карты сайта и дизайна, заканчивая кодом, чтобы ваш сайт привлекал больше посетителей и конвертировал их в клиентов.</p>
      </div>

      <div className={landing_dev.landing_tariffs_grand}>
        <h1>{Developer_JSON[1].headliner}</h1>
        <div className={landing_dev.landing_tariffs}>

          <div className={landing_dev.landing_tarifo}>
            <h2>{Tarifs_dev[0].name}</h2>
            <ul>
              {Tarifs_dev[0].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
            </ul>
          </div>

          <div className={landing_dev.landing_tarifo}>
            <h2>{Tarifs_dev[1].name}</h2>
            <ul>
              {Tarifs_dev[1].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
            </ul>
          </div>

          <div className={landing_dev.landing_tarifo}>
            <h2>{Tarifs_dev[2].name}</h2>
            <ul>
              {Tarifs_dev[2].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
            </ul>
          </div>

        </div>
      </div>

      <div className={landing_official.landing_benifits_grand}>
        <h1>{Developer_JSON[2].headliner}</h1>
        <div className={landing_official.landing_benifits}>
          {benefit[0]}
          {benefit[1]}
          {benefit[2]}
          {benefit[3]}
        </div>
      </div>

    </div>

  )
}
