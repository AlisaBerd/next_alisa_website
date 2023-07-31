import React, {useEffect, useState} from "react";
import contact_mobil from './ContactMobil.module.css'
import {sendMessage} from "../../async/send_message";
import Link from "next/link";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMobil = ({active, setActive,children}) => {
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [input_text, setInputText] = useState("");

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/contact')
  //   }
  // },[]);

  return (
    <div className={contact_mobil.contact}>
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
      <h2 className={contact_mobil.texto}>Расскажите о вашем проекте</h2>
      <p> заполните небольшую форму и я свяжусь с вами в течение дня</p>
      <div className={contact_mobil.container}>
        <form className={contact_mobil.form}>
          <div>
            <label>Email: </label>
            <input className={contact_mobil.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div>
            <label>Введите ваше имя:</label>
            <input className={contact_mobil.input}
              type="text"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              id="user_name"
            />
          </div>
          <div>
            <label>Расскажите о проекте:</label>
            <textarea className={contact_mobil.textarea} rows="5"
                      cols="60"
                      name="text"
                      placeholder="Enter text"
                      value={input_text}
                      onChange={(e) => setInputText(e.target.value)}
                      id="user_name"></textarea>
          </div>
          <span>*Нажимая на кнопку «Отправить сообщение»,
					даёте <Link href="/political" target="_blank" rel="noopener">согласие на обработку</Link> своих персональных данных.*</span>
          <button className={contact_mobil.button} onClick={(e) => {
            e.preventDefault();
            // dispatch(registerUser(email, password))
            console.log(email)
            console.log(user_name)
            console.log(input_text)
            sendMessage(email, user_name, input_text)
            toast.success("Спасибо за заказ! Скоро свяжусь с вами!");
          }}>Оставить заявку</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMobil
