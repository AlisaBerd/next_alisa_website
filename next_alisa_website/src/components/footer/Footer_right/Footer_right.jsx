import React, {useState} from "react";
import right from './Footer_right.module.css';
import Official_modal from "../../Index/official/official_modal/Official_modal";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {sendMessage} from "@/async/send_message";

const Footer_right = ({active, setActive,children}) =>{
  const [modalActive, setModalActive] = useState(false)

  return (
      <div className={right.footer_right}>
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
          <h2>Контакты </h2>
          <ul className={right.footer_list_right}>
            <li>+7 (963) 249-74-36</li>
            <li>alifox23969@gmail.com</li>
          </ul>
        <button className={right.deliver} onClick={() => setModalActive(true)}>Сделать заказ</button>
        <Official_modal active={modalActive} setActive={setModalActive} onClick={(e) => {
          e.preventDefault();
          // dispatch(registerUser(email, password))
          console.log(email)
          console.log(user_name)
          console.log(input_text)
          sendMessage(email, user_name, input_text)
          toast.success("Спасибо за заказ! Скоро свяжусь с вами!");
        }}/>
      </div>
  )
}

export default Footer_right
