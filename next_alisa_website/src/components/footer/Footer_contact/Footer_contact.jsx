import React, {useState} from "react";
import footer_contact from './Footer_contact.module.css';
import Official_modal_mobil from "../../Index/official/official_modal/Official_modal_mobil";


const Footer_contact = (props) =>{
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className={footer_contact.footer_right}>
      <h2>Контакты </h2>
      <ul>
        <li>+7 (963) 249-74-36</li>
        <li>alifox23969@gmail.com</li>
      </ul>
      <button className={footer_contact.deliver} onClick={() => setModalActive(true)}>Сделать заказ</button>
      <Official_modal_mobil active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default Footer_contact
