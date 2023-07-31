import React, {useEffect, useState} from "react";
import portfolio from './Portfolio.module.css';
import Portfolio_head from "./Portfolio_head/Portfolio_head";
import Portfolio_photo from "./Portfolio_photo/Porfolio_photo";
import {portfolioJson} from "./PortfolioJson";
import {isMobile} from "react-device-detect";
import {MOBILE_URL} from "@/config";




const Portfolio = (props) => {
  const [filter,setFilter] = useState('Все работы')
  const [count,setCount] = useState(9)
  const [but_number, setButNumber] = useState(1);
  let filtered_images_array = portfolioJson.filter(element => {
      if (element.tag.indexOf(filter)!=-1)
        return element
    }
  )

  let viewed_images_array = filtered_images_array.slice(0,count)
  let projects = viewed_images_array.map(element => {
      return <Portfolio_photo case={element.case} img={element.img} key={element.img} link={element.link}/>
  }
  )

  function seeMore(){
    setCount(count+3)
  }
  function buttonOnClick(v_number, v_filter){
    setFilter(v_filter)
    setButNumber(v_number)
    setCount(3)
  }

  let button_see_more = <button className={portfolio.portfolio_else} onClick={() => seeMore()}>Смотреть еще работы</button>
  if (filtered_images_array.length === viewed_images_array.length){
    button_see_more = ""
  }

  // useEffect(() => {
  //   if (isMobile == true){
  //     window.location.assign(MOBILE_URL+'/portfolio')
  //   }
  // },[]);

    return (
    <div className={portfolio.portfolio}>
      <Portfolio_head/>
      <div className={portfolio.portfolio_button}>
        <button className={but_number===1 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(1,'Все работы'))}> Все работы </button>
        <button className={but_number===2 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(2,'Веб дизайн'))}> Веб-дизайн </button>
        <button className={but_number===3 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(3,'Фирменный стиль'))}> Фирменный стиль </button>
        <button className={but_number===4 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(4,'Дизайн полиграфии'))}> Дизайн полиграфии </button>
      </div>
      <div className={portfolio.portfolio_button}>
        <button className={but_number===5 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(5,'Дизайн рекламы'))}> Дизайн рекламы </button>
        <button className={but_number===6 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(6,'Дизайн соц сетей'))}> Дизайн соц сетей </button>
        <button className={but_number===7 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(7,'Дизайн упаковки'))}> Дизайн упаковки </button>
        <button className={but_number===8 ?  portfolio.button_active : portfolio.button} onClick={() => (buttonOnClick(8,'Другие работы'))}> Другие работы </button>
      </div>
      <div className={portfolio.portfolio_projects}>
        {projects}
      </div>
      <div className={portfolio.else}>
        {button_see_more}
      </div>
    </div>
  )
}

export default Portfolio
