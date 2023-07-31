import React, {useState, useEffect} from 'react';
import contact_finish from './Contact_finish.module.css'
import css from "classnames";
import {useDispatch} from "react-redux";
import {removeAlert} from "../../store/alertsReducer";

export const Contact_finish  = ({ children, type, id }) => {
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch()
  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);


  };
  useEffect(() => {
    if(isShow == false) {
      dispatch(removeAlert(1))
    }
  },[isShow]);

  // const notificaton = () => {
  //
  // }

  return(
    <div className={css(contact_finish.contact_finish, contact_finish[type], !isShow && contact_finish.hide)}>
      <span className={contact_finish.closebtn} onClick={handleClose}>
        &times;
      </span>
      <h1>Спасибо за заказ</h1>
      <p>Благодарим Вас за проявленный интерес к моим услугам. Ваша заявка отправлена и я скоро свяжусь с вами в ближайшее время для уточнения деталей и ответа на все ваши вопросы.</p>
      {/*<div className={contact_finish.contact_finish_button}>*/}
      {/*  <button>Вернутся на главную</button>*/}
      {/*</div>*/}
      {/*{children ? renderElAlert() : message}*/}

    </div>
  )
}





// export default function Alert({ children, type, message }) {
//
//   const renderElAlert = function () {
//     return React.cloneElement(children);
//   };
//
//   return (
//     <div className={css(style.alert, style[type])}>
//       <span className={style.closebtn}>
//         &times;
//       </span>
//       {children ? renderElAlert() : message}
//     </div>
//   );
// }
