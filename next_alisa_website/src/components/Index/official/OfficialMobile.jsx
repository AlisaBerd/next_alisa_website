import React, {useState} from "react";
import official_css from './OfficialMobil.module.css';
import Official_modal from "./official_modal/Official_modal";
import Official_modal_mobil from "./official_modal/Official_modal_mobil";


export default function OfficialMobile() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div style={{
      //margin: '0 auto',
      //backgroundRepeat: 'no-repeat',
      // backgroundSize: '100% auto',
      width: '400px',
      height: '755px',
      color: '#fff',
      backgroundImage: 'url("images/heand02.png")',
    }}>
        <div className={official_css.official_mobil}>
          <h1>Креативный дизайн и инновационная разработка</h1>
          <h2>Воплощаю идеи в жизнь</h2>
          <h3>Сайты и креативный дизайн для вашего бизнеса </h3>
          <button  className={official_css.deliver_mobil} onClick={() => setModalActive(true)}>Сделать заказ</button>
          <Official_modal_mobil active={modalActive} setActive={setModalActive}/>
        </div>
      </div>
  )
}
