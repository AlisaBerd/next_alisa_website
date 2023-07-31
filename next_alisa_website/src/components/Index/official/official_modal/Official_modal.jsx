import React, {useState} from "react";
import official_modal from './Official_modal.module.css'
import {sendMessage} from "@/async/send_message";
import {addAlert} from "@/store/alertsReducer";
import {useDispatch} from "react-redux";
import Link from "next/link";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Official_modal = ({active, setActive,children}) => {
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [input_text, setInputText] = useState("");
  const [alertWindow, setAlertWindow] = useState("")
  const dispatch = useDispatch()
  // const [active, setActive] = useState("");

  return(
    <div className={active ? official_modal.official_modal_active : official_modal.official_modal} onClick={() => setActive(false)}>
      <div className={official_modal.modal_content} onClick={e => e.stopPropagation()}>
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
        <form className={official_modal.form_1}>
          <h2 className={official_modal.text_is}>Расскажите о вашем проекте {email}</h2>
          <p className={official_modal.paragraf}> заполните небольшую форму и я свяжусь с вами в течение дня</p>
          <div>
            <label>Email: </label>
            <input className={official_modal.input_desktop}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div>
            <label className={official_modal.label_desktop}>Введите ваше имя:</label>
            <input className={official_modal.input_desktop}
              type="text"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              id="user_name"
            />
          </div >
          <div>
            <label className={official_modal.label_desktop}>Расскажите о проекте:</label>
            <textarea
              className={official_modal.textarea_desktop}
              rows="5"
                      cols="60"
                      name="text"
                      placeholder="Enter text"
                      value={input_text}
                      onChange={(e) => setInputText(e.target.value)}
                      id="user_name"></textarea>
          </div>
          <button className={official_modal.button} onClick={(e) => {
            e.preventDefault();
            // dispatch(registerUser(email, password))
            console.log(email)
            console.log(user_name)
            console.log(input_text)
            sendMessage(email, user_name, input_text)
            toast.success("Спасибо за заказ! Скоро свяжусь с вами!");
          }}>Оставить заявку</button>
        </form>
        <span className={official_modal.span}>*Нажимая на кнопку «Оставить заявку»,
					даёте <Link href="/political" target="_blank" rel="noopener">согласие на обработку</Link> своих персональных данных.*</span>
        {/*{children}*/}
      </div>
    </div>
  )
}

export default Official_modal
