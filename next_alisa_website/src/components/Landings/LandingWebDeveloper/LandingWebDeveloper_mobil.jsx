import React, {useEffect, useState} from 'react'
import landing_dev_mobil from './LandingWebDeveloper_mobil.module.css'
import {Developer_JSON} from "./LandingWebDeveloperJSON";
import {Tarifs_dev} from "./Develop_tarifs";
import {Develop_block} from "./Develop_block";
import Landing_it_benefits from "./Landing_it_benefits";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
import Official_modal_mobil from "@/components/Index/official/official_modal/Official_modal_mobil";


export default function LandingWebDeveloper_mobile (props){
  let benefit = Develop_block.map(element => <Landing_it_benefits text={element.text} img={element.img} />);
  const [modalActive, setModalActive] = useState(false)
  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/developer')
  //   }
  // },[]);

  return(
    <div>

      <div style={{
        margin: '0 auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        width: '400px',
        height: '755px',
        color: '#fff',
        backgroundImage: `url("images/start_landing_mobil.png")`
      }}>
        <h1 className={landing_dev_mobil.landing_headliner}>{Developer_JSON[0].headliner}</h1>
        <p className={landing_dev_mobil.landing_par}>Создайте эффективный сайт с нуля</p>
        <div className={landing_dev_mobil.button_block}>
          <button className={landing_dev_mobil.landing_button} onClick={() => setModalActive(true)}>Сделать заказ</button>
          <Official_modal_mobil active={modalActive} setActive={setModalActive}/>
        </div>
      </div>

      <div className={landing_dev_mobil.landing_second}>
        {/*<img src='/images/forlanding.png'/>*/}
        <p >Ваш сайт - это лицо вашего бизнеса в интернете, и вы хотите, чтобы оно выглядело и работало идеально.Я помогу вам создать эффективный сайт с нуля, начиная от карты сайта и дизайна, заканчивая кодом, чтобы ваш сайт привлекал больше посетителей и конвертировал их в клиентов..</p>
      </div>

      <div className={landing_dev_mobil.landing_tariffs_grand}>
        <h1>{Developer_JSON[1].headliner}</h1>
        <div className={landing_dev_mobil.landing_tariffs}>

          <div className={landing_dev_mobil.landing_tarifo}>
            <h2>{Tarifs_dev[0].name}</h2>
            <ul>
              {Tarifs_dev[0].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
            </ul>
          </div>

          <div className={landing_dev_mobil.landing_tarifo}>
            <h2>{Tarifs_dev[1].name}</h2>
            <ul>
              {Tarifs_dev[1].tarifs.map(element => <li key={element.service}>{element.service}</li>)}
            </ul>
          </div>

        </div>
      </div>

      <div className={landing_dev_mobil.landing_benifits_grand}>
        <h1>{Developer_JSON[2].headliner}</h1>
        <div className={landing_dev_mobil.landing_benifits}>
          {benefit[0]}
          {benefit[1]}
          {benefit[2]}
          {benefit[3]}
        </div>
      </div>

        </div>
  )
}
