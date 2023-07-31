import React, {useEffect, useState} from "react";
import portfolio_mobile from './PortfolioMobile.module.css';
import Portfolio_head from "./Portfolio_head/Portfolio_head";
import {portfolioJson} from "./PortfolioJson";
import Portfolio_photo_mobil from "./Portfolio_photo/Portfolio_photo_mobil";
import {isMobile} from "react-device-detect";
import {DESKTOP_URL} from "@/config";



const PortfolioMobile = (props) => {
  const [filter,setFilter] = useState('Все работы')
  let projects = portfolioJson.map(element => {
      if (element.tag.indexOf(filter)!=-1)
        return <Portfolio_photo_mobil case={element.case} img={element.img} key={element.img} link={element.link}/>
    }
  )

  const [but_number, setButNumber] = useState(1);

  function buttonOnClick(v_number, v_filter){
    setFilter(v_filter)
    setButNumber(v_number)
  }

  // useEffect(() => {
  //   if (isMobile == false){
  //     window.location.assign(DESKTOP_URL+'/portfolio')
  //   }
  // },[]);

  return (
    <div className={portfolio_mobile.portfolio}>
      <Portfolio_head/>
      <div className={portfolio_mobile.portfolio_button}>
        <button className={but_number===1 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(1,'Все работы'))}> Все работы </button>
        <button className={but_number===2 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(2,'Веб дизайн'))}> Веб-дизайн </button>
        <button className={but_number===3 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(3,'Фирменный стиль'))}> Фирменный стиль </button>
        <button className={but_number===4 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(4,'Дизайн полиграфии'))}> Дизайн полиграфии </button>
        <button className={but_number===5 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(5,'Дизайн рекламы'))}> Дизайн рекламы </button>
        <button className={but_number===6 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(6,'Дизайн соц сетей'))}> Дизайн соц сетей </button>
        <button className={but_number===7 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(7,'Дизайн упаковки'))}> Дизайн упаковки </button>
        <button className={but_number===8 ?  portfolio_mobile.button_active : portfolio_mobile.button} onClick={() => (buttonOnClick(8,'Другие работы'))}> Другие работы </button>
      </div>
      <div className={portfolio_mobile.portfolio_projects}>
        {projects}
      </div>
      <div className={portfolio_mobile.else}>
      </div>
    </div>
  )
}

export default PortfolioMobile
