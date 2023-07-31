import React, {useEffect, useState} from "react";
import contact from './Contact.module.css'

import Link from "next/link";
import Image from "next/image";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";
import {addAlert} from "@/store/alertsReducer";
import official_modal from "@/components/Index/official/official_modal/Official_modal.module.css";
import {useDispatch} from "react-redux";
import {Contact_finish} from "@/components/Contact/Contact_finish";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {sendMessage} from "@/async/send_message";

const Contact  = () => {
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [input_text, setInputText] = useState("");
  const [alertWindow, setAlertWindow] = useState("")
  const dispatch = useDispatch()
  const [active, setActive] = useState("");

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/contact')
  //   }
  // },[]);

  // const notificaton = () => toast('Спасибо за заказ! Скоро свяжусь с вами!');




  //console.log(displayLoginNotification)

  return (
  <div className={contact.contact}>
    <ToastContainer
      position='top-right'
      autoClose={500000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
      <h2 className={contact.text_is}>Расскажите о вашем проекте</h2>
      <p> заполните небольшую форму и я свяжусь с вами в течение дня</p>
      <div className={contact.container}>
      <form className={contact.form}>
        <div>
          <label className={contact.label_desktop}>Email: </label>
          <input className={contact.input_desktop}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
      <div>
        <label className={contact.label_desktop}>Введите ваше имя:</label>
        <input className={contact.input_desktop}
          type="text"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          id="user_name"
        />
      </div>
      <div>
        <label className={contact.label_desktop}>Расскажите о проекте:</label>
        <textarea className={contact.textarea_desktop} rows="5"
                  cols="60"
                  name="text"
                  placeholder="Enter text"
                  value={input_text}
                  onChange={(e) => setInputText(e.target.value)}
                  id="user_name"></textarea>
      </div>
        <span  className={contact.span} >*Нажимая на кнопку «Отправить сообщение»,
					даёте <Link href="/political" target="_blank" rel="noopener">согласие на обработку</Link> своих персональных данных.*</span>

        <button className={official_modal.button} onClick={(e) => {
          e.preventDefault();
          // dispatch(registerUser(email, password))
          console.log(email)
          console.log(user_name)
          console.log(input_text)
          sendMessage(email, user_name, input_text)
          toast.success("Спасибо за заказ! Скоро свяжусь с вами!");
        }}>Оставить заявку</button>


        {/*<button className={official_modal.button}  onClick =>*/}
        {/*  { /* //   e.preventDefault();*/}
        {/*// // dispatch(registerUser(email, password))*/}
        {/*// // console.log(email)*/}
        {/*// // console.log(user_name)*/}
        {/*// // console.log(input_text)*/}
        {/*// sendMessage(email, user_name, input_text)*/}
        {/*// setTimeout(() => { setActive(false)   }, 1000);*/}
        {/*  //alert(<Contact_finish/>)*/}
        {/*  // dispatch(addAlert({id:1, type:"success"}))*/}
        {/*  // console.log(alertWindow) *!/*/}
        {/*  {displayLoginNotification}>*/}
        {/*  Оставить заявку </button>*/}
      </form>
      <Image className={contact.img} src="/images/contact_me.png" width={300} height={200} alt=""/>
      </div>
    </div>
  );
}

export default Contact
