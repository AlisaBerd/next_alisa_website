import React, {useState} from "react";
import official from './Official.module.css';
import Official_modal from "./official_modal/Official_modal";


export default function Official() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div style={{
      //margin: '0 auto',
      //backgroundRepeat: 'no-repeat',
     // backgroundSize: '100% auto',
      width: '100vw',
      height: '49.4792vw',
      color: '#fff',
      backgroundImage: 'url("images/heand06.jpg")',
    }}>
      <div className={official.official}>
        <h1>Креативный дизайн и инновационная разработка</h1>
          <h2>Воплощаю идеи в жизнь</h2>
            <h3>Сайты и креативный дизайн для вашего бизнеса </h3>
              <button className={official.deliver} onClick={() => setModalActive(true)}>Сделать заказ</button>
        <Official_modal active={modalActive} setActive={setModalActive}/>
      </div>
    </div>
  )
}



